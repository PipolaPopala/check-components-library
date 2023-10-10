import { ReactComponent as Arrow} from './arrow-left.svg';

function BtnArrow({classes, arrowClasses}) {
  classes = classes.join(' ');
  arrowClasses = arrowClasses.join(' ');
  return (
    <button className={"btn btn-icon " + classes} type="button">
      <Arrow className={arrowClasses}/>
    </button>
  );
}

export default BtnArrow;
