import BtnText from './components/UI/bthText/btnText'
import BtnArrow from './components/UI/bthArrow/btnArrow'

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
const arrowGray = 'arrow-gray'
// const arrowDark = 'arrow-dark'

function App() {
  const hendleClick = () => {
    alert("hi")
  }
  return (
    <div>
      {/* Секция кнопок с текстом и стрелками */}
      <section className="section">
        <hr></hr>
        <BtnText
          classes={[btnTextBig, primary]}
          arrowClasses={[arrowBigText, arrowWhite]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, primary]}
          arrowClasses={[arrowMediumText, arrowWhite]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, primary]}
          arrowClasses={[arrowSmallText, arrowWhite]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextBig, secondary]}
          arrowClasses={[arrowBigText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, secondary]}
          arrowClasses={[arrowMediumText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, secondary]}
          arrowClasses={[arrowSmallText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextBig, ghost]}
          arrowClasses={[arrowBigText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, ghost]}
          arrowClasses={[arrowMediumText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, ghost]}
          arrowClasses={[arrowSmallText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>
      </section>

      {/* Секция кнопок с текстом и стрелками в тёмной теме*/}
      <section className="section dark-side">
        <hr></hr>
        <BtnText
          classes={[btnTextBig, primary]}
          arrowClasses={[arrowBigText, arrowWhite]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextMedium, backInDark]}
          arrowClasses={[arrowMediumText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextSmall, ghost]}
          arrowClasses={[arrowSmallText, arrowGray]}
          onClick={hendleClick}
        > Active
        </BtnText>
      </section>

      {/* Секция кнопок со стрелками */}
      <section className="section">
        <hr></hr>
        <BtnArrow
          classes={[btnArrowBig, primary]}
          arrowClasses={[arrowBig, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, primary]}
          arrowClasses={[arrowMedium, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, primary]}
          arrowClasses={[arrowSmall, arrowWhite]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, secondary]}
          arrowClasses={[arrowBig, arrowGray]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, secondary]}
          arrowClasses={[arrowMedium, arrowGray]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, secondary]}
          arrowClasses={[arrowSmall, arrowGray]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, ghost]}
          arrowClasses={[arrowBig, arrowGray]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, ghost]}
          arrowClasses={[arrowMedium, arrowGray]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, ghost]}
          arrowClasses={[arrowSmall, arrowGray]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция кнопок со стрелками в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <BtnArrow
          classes={[btnArrowBig, primary]}
          arrowClasses={[arrowBig, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, primary]}
          arrowClasses={[arrowMedium, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, primary]}
          arrowClasses={[arrowSmall, arrowWhite]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, backInDark]}
          arrowClasses={[arrowBig, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, backInDark]}
          arrowClasses={[arrowMedium, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, backInDark]}
          arrowClasses={[arrowSmall, arrowWhite]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, ghost]}
          arrowClasses={[arrowBig, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, ghost]}
          arrowClasses={[arrowMedium, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, ghost]}
          arrowClasses={[arrowSmall, arrowWhite]}
          onClick={hendleClick}
        />
      </section>
    </div>
  )
}

export default App
