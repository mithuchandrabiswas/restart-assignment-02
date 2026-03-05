import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Navbar     from './components/Navbar';
import StatsRow   from './components/StatsRow';
import TicketCard from './components/TicketCard';
import Sidebar    from './components/Sidebar';
import Modal      from './components/Modal';
import Footer     from './components/Footer';

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

  const handleSelect = (id) => {
    if (tasks.find((t) => t.id === id)) {
      toast.info('This ticket is already in progress.');
      return;
    }
    const ticket = tickets.find((t) => t.id === id);
    if (!ticket) return;

    setSelected(id);
    setTasks((prev) => [...prev, { ...ticket, status: 'In-Progress' }]);
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'In-Progress' } : t))
    );
    toast.warning(`Ticket #${id} moved to In-Progress.`);
  };

  const handleResolve = (id) => {
    const task = tasks.find((t) => t.id === id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
    setResolved((prev) => [...prev, { ...task, status: 'Resolved' }]);
    setTickets((prev) => prev.filter((t) => t.id !== id));
    if (selected === id) setSelected(null);
    toast.success(`Ticket #${id} has been resolved!`);
  };

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
    toast.success(`New ticket "${form.title}" created successfully!`);
  };

  return (
    <>
      <Navbar onNewTicket={() => setModal(true)} />

      <StatsRow
        inProgressCount={tasks.length}
        resolvedCount={resolved.length}
      />

      <div className="layout">
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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;