import Badge from './Badge';
import { getPriorityClass } from '../utils/helpers';
import '../styles/TicketCard.css';

function TicketCard({ ticket, selected, onSelect }) {
  return (
    <div
      className={`ticket-card${selected ? ' selected' : ''}`}
      onClick={() => onSelect(ticket.id)}
    >
      <div className="t-header">
        <div className="t-title">{ticket.title}</div>
        <Badge status={ticket.status} />
      </div>

      <div className="t-desc">{ticket.desc}</div>

      <div className="t-meta">
        <span>
          #{ticket.id}{' '}
          <span className={getPriorityClass(ticket.priority)}>
            {ticket.priority} PRIORITY
          </span>
        </span>
        <span className="t-meta-right">
          <span>{ticket.name}</span>
          <span>📅 {ticket.date}</span>
        </span>
      </div>
    </div>
  );
}

export default TicketCard;
