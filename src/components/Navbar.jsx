import '../styles/Navbar.css';

// Menu Title
const NAV_LINKS = ["Home", "FAQ", "Changelog", "Blog", "Contact"];

function Navbar({ onNewTicket }) {
  return (
    <nav className="nav">
      <div className="nav-logo">Ticket System</div>

      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>

      <button className="btn-new" onClick={onNewTicket}>
        ＋ New Ticket
      </button>
    </nav>
  );
}

export default Navbar;
