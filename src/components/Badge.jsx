import { getBadgeClass } from '../utils/helpers';

function Badge({ status }) {
  return (
    <span className={`badge ${getBadgeClass(status)}`}>
      <span className="badge-dot" />
      {status}
    </span>
  );
}

export default Badge;
