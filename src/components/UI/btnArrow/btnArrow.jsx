import { ArrowLeftSvg } from "../../../utilits/icon/arrowLeft";

import './style.css';

function BtnArrow({classes, arrowClasses, ...props}) {
  classes = classes.join(' ');
  arrowClasses = arrowClasses.join(' ');
  return (
    <button className={"btn btn-icon " + classes} type="button"  {...props}>
      <ArrowLeftSvg className={arrowClasses}/>
    </button>
  );
}

export default BtnArrow;
