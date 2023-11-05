import './style.css';

export default function PassStatus({ children, className }) {
  let color
  switch (children) {
    case 'Активен': color = 'active'
      break
    case 'Отклонён': color = 'rejected'
      break
    default: color = 'inactive'
  }
  return (
    <span className={`pass-status ${color} ` + className}>
      {children}
    </span>
  );
}
