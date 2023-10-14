import './style.css';

function CheckBox({children, name, ...props}) {
  return (
    <label className="check-label"><input className="check-input" type="checkbox" name={name} {...props}/>
    <span className="check-box"></span>
    {children}</label>
  );
}

export default CheckBox;