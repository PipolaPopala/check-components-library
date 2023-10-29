import './style.css';

export default function BtnIcon({classes, icon, ...props}) {
  const forBtn = classes.join(' ');
  return (
    <button className={"btn btn-icon " + forBtn} type="button"  {...props}>
      {icon}
    </button>
  );
}
