import BtnText from './components/btn-text';
import BtnArrow from './components/btn-arrow';

const primary = 'color-primary'
const secondary = 'color-secondary'
const ghost = 'color-ghost'
const backInDark = 'color-back-in-dark'
const btnTextBig = 'btn-text-big'
const btnTextMedium = 'btn-text-medium'
const btnTextSmall = 'btn-text-small'
const btnArrowBig = 'btn-arrow-big'
const btnArrowMedium = 'btn-arrow-medium'
const btnArrowSmall = 'btn-arrow-small'
const arrowBigText = 'arrow-big-text'
const arrowMediumText = 'arrow-medium-text'
const arrowSmallText = 'arrow-small-text'
const arrowBig = 'arrow-big'
const arrowMedium = 'arrow-medium'
const arrowSmall = 'arrow-small'
const arrowWhite = 'arrow-white'
const arrowDark = 'arrow-dark'
const arrowGray = 'arrow-gray'

let text = 'Active'

function App() {
  return (
    <div>
      {/* Секция кнопок с текстом и стрелками */}
      <section className="section">
        <hr></hr>
        <BtnText
        classes={[btnTextBig, primary]}
        text={text}
        arrowClasses={[arrowBigText, arrowWhite]}
        />
        <BtnText 
        classes={[btnTextMedium, primary]}
        text={text}
        arrowClasses={[arrowMediumText, arrowWhite]}
        />
        <BtnText 
        classes={[btnTextSmall, primary]}
        text={text}
        arrowClasses={[arrowSmallText, arrowWhite]}
        />

        <BtnText 
        classes={[btnTextBig, secondary]}
        text={text}
        arrowClasses={[arrowBigText, arrowGray]}
        />
        <BtnText 
        classes={[btnTextMedium, secondary]}
        text={text}
        arrowClasses={[arrowMediumText, arrowGray]}
        />
        <BtnText 
        classes={[btnTextSmall, secondary]}
        text={text}
        arrowClasses={[arrowSmallText, arrowGray]}
        />

        <BtnText 
        classes={[btnTextBig, ghost]}
        text={text}
        arrowClasses={[arrowBigText, arrowGray]}
        />
        <BtnText 
        classes={[btnTextMedium, ghost]}
        text={text}
        arrowClasses={[arrowMediumText, arrowGray]}
        />
        <BtnText 
        classes={[btnTextSmall, ghost]}
        text={text}
        arrowClasses={[arrowSmallText, arrowGray]}
        />
      </section>

      {/* Секция кнопок со стрелками */}
      <section className='section'>
        <hr></hr>
        <BtnArrow
        classes={[btnArrowBig, primary]}
        arrowClasses={[arrowBig, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowMedium, primary]}
        arrowClasses={[arrowMedium, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowSmall, primary]}
        arrowClasses={[arrowSmall, arrowWhite]}
        />

        <BtnArrow
        classes={[btnArrowBig, secondary]}
        arrowClasses={[arrowBig, arrowGray]}
        />
        <BtnArrow
        classes={[btnArrowMedium, secondary]}
        arrowClasses={[arrowMedium, arrowGray]}
        />
        <BtnArrow
        classes={[btnArrowSmall, secondary]}
        arrowClasses={[arrowSmall, arrowGray]}
        />

        <BtnArrow
        classes={[btnArrowBig, ghost]}
        arrowClasses={[arrowBig, arrowGray]}
        />
        <BtnArrow
        classes={[btnArrowMedium, ghost]}
        arrowClasses={[arrowMedium, arrowGray]}
        />
        <BtnArrow
        classes={[btnArrowSmall, ghost]}
        arrowClasses={[arrowSmall, arrowGray]}
        />
      </section>

      {/* Секция кнопок со стрелками в тёмной теме */}
      <section className='section dark-side'>
        <hr></hr>
        <BtnArrow
        classes={[btnArrowBig, primary]}
        arrowClasses={[arrowBig, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowMedium, primary]}
        arrowClasses={[arrowMedium, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowSmall, primary]}
        arrowClasses={[arrowSmall, arrowWhite]}
        />

        <BtnArrow
        classes={[btnArrowBig, backInDark]}
        arrowClasses={[arrowBig, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowMedium, backInDark]}
        arrowClasses={[arrowMedium, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowSmall, backInDark]}
        arrowClasses={[arrowSmall, arrowWhite]}
        />

        <BtnArrow
        classes={[btnArrowBig, ghost]}
        arrowClasses={[arrowBig, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowMedium, ghost]}
        arrowClasses={[arrowMedium, arrowWhite]}
        />
        <BtnArrow
        classes={[btnArrowSmall, ghost]}
        arrowClasses={[arrowSmall, arrowWhite]}
        />
      </section>
    </div>
  );
}

export default App;
