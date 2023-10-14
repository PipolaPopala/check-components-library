import './style.css';

function RadioButton({children, name, ...props}) {
  return (
    <label className="radio-label"><input className="radio-input" type="radio" name={name} {...props}/>
    <span className="radio-box"></span>
    {children}</label>
  );
}

export default RadioButton;