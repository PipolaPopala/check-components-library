import { ReactComponent as Arrow} from './arrow-left.svg';

function BtnText({classes, text, arrowClasses}) {
  classes = classes.join(' ');
  arrowClasses = arrowClasses.join(' ');
  return (
    <button className={"btn btn-text " + classes} type="button">
      <Arrow className={arrowClasses}/>
      {text}
      <Arrow className={"rotate-180 " + arrowClasses}/>
    </button>
  );
}

export default BtnText;
