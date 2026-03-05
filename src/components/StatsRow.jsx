import '../styles/StatsRow.css';

function StatsRow({ inProgressCount, resolvedCount }) {
  return (
    <div className="stats-row">
      <div className="stat-card stat-ip">
        <div className="stat-label">In-Progress</div>
        <div className="stat-num">{inProgressCount}</div>
      </div>
      <div className="stat-card stat-rs">
        <div className="stat-label">Resolved</div>
        <div className="stat-num">{resolvedCount}</div>
      </div>
    </div>
  );
}

export default StatsRow;
