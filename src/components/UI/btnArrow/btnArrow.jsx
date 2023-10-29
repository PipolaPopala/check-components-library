import { ArrowLeftSvg } from "../../../utilits/icon/arrowLeft";

import './style.css';

function BtnArrow({classes, arrowClasses, ...props}) {
  const forBtn = classes.join(' ');
  const forArrow = arrowClasses.join(' ');
  return (
    <button className={"btn btn-icon " + forBtn} type="button"  {...props}>
      <ArrowLeftSvg className={forArrow}/>
    </button>
  );
}

export default BtnArrow;
