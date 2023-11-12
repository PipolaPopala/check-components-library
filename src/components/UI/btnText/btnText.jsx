import './style.css';

export default function BtnText({ children, classes, icon, iconRight, ...props }) {
  const forBtn = classes.join(' ');
  return (
    <button className={"btn btn-text " + forBtn} type="button" {...props}>
      {icon}
      {children}
      {iconRight}
    </button>
  );
}

