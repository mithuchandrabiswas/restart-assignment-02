import { getPriorityClass } from '../utils/helpers';
import '../styles/Sidebar.css';

// Sidebar Function
function Sidebar({ tasks, resolved, onResolve }) {
  return (
    <div className="sidebar">
      {/* Task Status */}
      <div className="sidebar-card">
        <div className="sidebar-title">Task Status</div>

        {tasks.length === 0 ? (
          <div className="sidebar-hint">Select a ticket to add to Task Status</div>
        ) : (
          tasks.map((t) => (
            <div className="task-item" key={t.id}>
              <div className="task-item-title">{t.title}</div>
              <div className="task-item-foot">
                <span className={getPriorityClass(t.priority)}>{t.priority}</span>
                <button className="btn-resolve" onClick={() => onResolve(t.id)}>
                  Resolve ✓
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Resolved Tasks */}
      <div className="sidebar-card">
        <div className="sidebar-title">Resolved Task</div>

        {resolved.length === 0 ? (
          <div className="sidebar-hint">No resolved tasks yet.</div>
        ) : (
          resolved.map((t) => (
            <div className="resolved-item" key={t.id}>
              <div className="task-item-title">{t.title}</div>
              <div className="task-item-foot">
                <span className="resolved-check">✓ Resolved</span>
                <span className="resolved-name">{t.name}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Sidebar;
