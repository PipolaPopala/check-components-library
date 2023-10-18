import { SpinnerSvg } from "../../../utilits/icon/spinner";

import './style.css';

function BtnTextLoading({classes, spinnerClasses, ...props}) {
  classes = classes.join(' ');
  spinnerClasses = spinnerClasses.join(' ');
  return (
    <button className={"btn btn-loading " + classes} type="button" {...props}>
      <SpinnerSvg className={spinnerClasses}/>
    </button>
  );
}

export default BtnTextLoading;
