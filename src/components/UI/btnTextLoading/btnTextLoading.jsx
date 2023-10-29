import { SpinnerSvg } from "../../../utilits/icon/spinner";

import './style.css';

function BtnTextLoading({classes, spinnerClasses, ...props}) {
  const forBtn = classes.join(' ');
  const forSpinner = spinnerClasses.join(' ');
  return (
    <button className={"btn btn-loading " + forBtn} type="button" {...props}>
      <SpinnerSvg className={forSpinner}/>
    </button>
  );
}

export default BtnTextLoading;
