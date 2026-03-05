import { useState } from 'react';

import Navbar    from './components/Navbar';
import StatsRow  from './components/StatsRow';
import TicketCard from './components/TicketCard';
import Sidebar   from './components/Sidebar';
import Modal     from './components/Modal';
import Footer    from './components/Footer';

import INITIAL_TICKETS from './data/tickets';
import { formatDate }  from './utils/helpers';

import './styles/App.css';

let UID = 1011;

function App() {
  const [tickets,  setTickets]  = useState(INITIAL_TICKETS);
  const [tasks,    setTasks]    = useState([]);
  const [resolved, setResolved] = useState([]);
  const [modalOpen, setModal]   = useState(false);
  const [selected, setSelected] = useState(null);

  /* Click a ticket → move to Task Status (In-Progress) */
  const handleSelect = (id) => {
    if (tasks.find((t) => t.id === id)) return; // already in tasks
    const ticket = tickets.find((t) => t.id === id);
    if (!ticket) return;

    setSelected(id);
    setTasks((prev) => [...prev, { ...ticket, status: 'In-Progress' }]);
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'In-Progress' } : t))
    );
  };

  /* Resolve a task */
  const handleResolve = (id) => {
    const task = tasks.find((t) => t.id === id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setResolved((prev) => [...prev, { ...task, status: 'Resolved' }]);
    setTickets((prev) => prev.filter((t) => t.id !== id));
    if (selected === id) setSelected(null);
  };

  /* Create a new ticket from modal */
  const handleCreate = (form) => {
    const newTicket = {
      id:       UID++,
      title:    form.title,
      desc:     form.desc || 'No description provided.',
      status:   'Open',
      priority: form.priority,
      name:     form.name,
      date:     formatDate(),
    };
    setTickets((prev) => [newTicket, ...prev]);
    setModal(false);
  };

  return (
    <>
      <Navbar onNewTicket={() => setModal(true)} />

      <StatsRow
        inProgressCount={tasks.length}
        resolvedCount={resolved.length}
      />

      <div className="layout">
        {/* Ticket Grid */}
        <div>
          <div className="section-title">Customer Tickets</div>
          <div className="tickets-grid">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                selected={selected === ticket.id}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar
          tasks={tasks}
          resolved={resolved}
          onResolve={handleResolve}
        />
      </div>

      <Footer />

      <Modal
        open={modalOpen}
        onClose={() => setModal(false)}
        onSubmit={handleCreate}
      />
    </>
  );
}

export default App;
