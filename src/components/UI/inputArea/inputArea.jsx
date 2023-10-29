import { Search } from "../../../utilits/icon/search";

import './style.css';

function InputArea({children, classes, colorIcon, name, ...props}) {
  const forWrapper = classes.join(' ');
  return (
    <div>
      <p className="input-title">{children}</p>
      <div className={"input-area-wrapper " + forWrapper}>
        <Search color={colorIcon}/>
        <textarea className="input-area" name={name} id="" placeholder="Empty" cols="30" rows="3" {...props}></textarea>
      </div>
    </div>
  );
}

export default InputArea;
