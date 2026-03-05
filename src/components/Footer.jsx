import '../styles/Footer.css';

const FOOTER_COLS = [
  {
    title: 'Company',
    links: ['About Us', 'Our Mission', 'Contact Sales'],
  },
  {
    title: 'Services',
    links: ['Products & Services', 'Customer Stories', 'Download Apps'],
  },
  {
    title: 'Information',
    links: ['Privacy Policy', 'Terms & Conditions', 'Join Us'],
  },
];

const SOCIAL_LINKS = [
  { icon: '𝕏', label: '@CS — Ticket System', bg: '#222' },
  { icon: 'in', label: '@CS — Ticket System', bg: '#0077b5' },
  { icon: 'f',  label: '@CS — Ticket System', bg: '#1877f2' },
  { icon: '✉',  label: 'support@cst.com',     bg: '#222'    },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div className="ft-brand">CS — Ticket System</div>
          <p className="ft-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Link Columns */}
        {FOOTER_COLS.map((col) => (
          <div className="ft-col" key={col.title}>
            <div className="ft-col-title">{col.title}</div>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social */}
        <div className="ft-col">
          <div className="ft-col-title">Social Links</div>
          <ul>
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a href="#">
                  <span className="social-icon" style={{ background: s.bg }}>
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
