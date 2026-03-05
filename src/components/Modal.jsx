import { useState } from 'react';
import '../styles/Modal.css';

const EMPTY_FORM = { title: '', desc: '', name: '', priority: 'MEDIUM' };

function Modal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState(EMPTY_FORM);

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.title.trim() || !form.name.trim()) {
      alert('Title and Customer Name are required.');
      return;
    }
    onSubmit(form);
    setForm(EMPTY_FORM);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={`overlay${open ? ' open' : ''}`} onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-head">
          <h2>Create New Ticket</h2>
          <button className="btn-x" onClick={onClose}>✕</button>
        </div>

        <div className="form-group">
          <label>Ticket Title</label>
          <input
            value={form.title}
            onChange={handleChange('title')}
            placeholder="Describe the issue briefly…"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={form.desc}
            onChange={handleChange('desc')}
            placeholder="Provide more details about the issue…"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Customer Name</label>
            <input
              value={form.name}
              onChange={handleChange('name')}
              placeholder="Full name"
            />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select value={form.priority} onChange={handleChange('priority')}>
              <option value="HIGH">High Priority</option>
              <option value="MEDIUM">Medium Priority</option>
              <option value="LOW">Low Priority</option>
            </select>
          </div>
        </div>

        <button className="btn-submit" onClick={handleSubmit}>
          Submit Ticket
        </button>
      </div>
    </div>
  );
}

export default Modal;
