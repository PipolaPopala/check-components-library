// import { ArrowLeftSvg } from "../../../utilits/icon/arrowLeft";

import './style.css';

export default function BtnText({children, classes, icon, ...props}) {
  const forBtn = classes.join(' ');
  return (
    <button className={"btn btn-text " + forBtn} type="button" {...props}>
      {icon}
      {children}
    </button>
  );
}

// function BtnText({children, classes, arrowClasses, ...props}) {
//   classes = classes.join(' ');
//   arrowClasses = arrowClasses.join(' ');
//   return (
//     <button className={"btn btn-text " + classes} type="button" {...props}>
//       <ArrowLeftSvg className={arrowClasses}/>
//       {children}
//       <ArrowLeftSvg className={"rotate-180 " + arrowClasses}/>
//     </button>
//   );
// }

// export default BtnText;
