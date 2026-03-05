import '../styles/Navbar.css';

const NAV_LINKS = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

function Navbar({ onNewTicket }) {
  return (
    <nav className="nav">
      <div className="nav-logo">CS — Ticket System</div>

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
