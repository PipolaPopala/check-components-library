import BtnText from './components/UI/btnText/btnText'
import BtnTextLoading from './components/UI/btnTextLoading/btnTextLoading'
import BtnArrow from './components/UI/btnArrow/btnArrow'
import RadioButton from './components/UI/radioButton/radioButton'
import CheckBox from './components/UI/checkBox/checkBox'

// основные цвета для background
const primary = 'color-primary'
const secondary = 'color-secondary'
const ghost = 'color-ghost'
const backInDark = 'color-back-in-dark'
const active = 'color-active'
const activeDark = 'color-active-dark'
const brand = 'color-brand'

// размеры кнопок с текстом
const btnTextBig = 'btn-text-big'
const btnTextMedium = 'btn-text-medium'
const btnTextSmall = 'btn-text-small'

// размеры кнопок с загрузкой
const btnLoadingBig = 'btn-loading-big'
const btnLoadingMedium = 'btn-loading-medium'
const btnLoadingSmall = 'btn-loading-small'

// размеры акопок со стрелками
const btnArrowBig = 'btn-arrow-big'
const btnArrowMedium = 'btn-arrow-medium'
const btnArrowSmall = 'btn-arrow-small'

// размеры стрелок в кнопках с текстом
const arrowBigText = 'arrow-big-text'
const arrowMediumText = 'arrow-medium-text'
const arrowSmallText = 'arrow-small-text'

// размеры стрелок в кнопках со стрелками
const arrowBig = 'arrow-big'
const arrowMedium = 'arrow-medium'
const arrowSmall = 'arrow-small'

// цвета стрелок
const arrowWhite = 'arrow-white'
const arrowGray = 'arrow-gray'
const arrowDark = 'arrow-dark'

// цвета спиннера
const spinnerBlack = 'spinner-black'
const spinnerGrayDark = 'spinner-gray-dark'
const spinnerGrayLight = 'spinner-gray-light'

// размеры спиннера
const spinnerBig = 'spinner-big'
const spinnerMedium = 'spinner-medium'
const spinnerSmall = 'spinner-small'

function App() {
  const hendleClick = () => {
    alert("hi")
  }
  return (
    <div className='gallery'>
      
      {/* Секция кнопок с текстом и стрелками */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция кнопок с текстом и стрелками</p>
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
        <p className='text'>Секция кнопок с текстом и стрелками в тёмной теме</p>
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

      {/* Секция активных кнопок с текстом и стрелками */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция активных кнопок с текстом и стрелками</p>
        <BtnText
          classes={[btnTextBig, active]}
          arrowClasses={[arrowBigText, arrowWhite]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextMedium, active]}
          arrowClasses={[arrowMediumText, arrowWhite]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextSmall, active]}
          arrowClasses={[arrowSmallText, arrowWhite]}
          onClick={hendleClick}
        > Active
        </BtnText>
      </section>

      {/* Секция активных кнопок с текстом и стрелками в тёмной теме*/}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция активных кнопок с текстом и стрелками в тёмной теме</p>
        <BtnText
          classes={[btnTextBig, activeDark]}
          arrowClasses={[arrowBigText, arrowDark]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextMedium, activeDark]}
          arrowClasses={[arrowMediumText, arrowDark]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextSmall, activeDark]}
          arrowClasses={[arrowSmallText, arrowDark]}
          onClick={hendleClick}
        > Active
        </BtnText>
      </section>

      {/* Секция кнопок со стрелками */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция кнопок со стрелками</p>
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
        <p className='text'>Секция кнопок со стрелками в тёмной теме</p>
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

      {/* Секция кнопок со стрелками */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция активных кнопок со стрелками</p>
        <BtnArrow
          classes={[btnArrowBig, active]}
          arrowClasses={[arrowBig, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, active]}
          arrowClasses={[arrowMedium, arrowWhite]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, active]}
          arrowClasses={[arrowSmall, arrowWhite]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция кнопок со стрелками в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция активных кнопок со стрелками в тёмной теме</p>
        <BtnArrow
          classes={[btnArrowBig, activeDark]}
          arrowClasses={[arrowBig, arrowDark]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, activeDark]}
          arrowClasses={[arrowMedium, arrowDark]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, activeDark]}
          arrowClasses={[arrowSmall, arrowDark]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция кнопок с загрузкой */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция кнопок с загрузкой</p>
        <BtnTextLoading
          classes={[btnLoadingBig, brand]}
          spinnerClasses={[spinnerBig, spinnerBlack]}
          onClick={hendleClick}
        />
        <BtnTextLoading
          classes={[btnLoadingMedium, secondary]}
          spinnerClasses={[spinnerMedium, spinnerGrayDark]}
          onClick={hendleClick}
        />
        <BtnTextLoading
          classes={[btnLoadingSmall, ghost]}
          spinnerClasses={[spinnerSmall, spinnerGrayDark]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция кнопок с загрузкой в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция кнопок с загрузкой в тёмной теме</p>
        <BtnTextLoading
          classes={[btnLoadingBig, brand]}
          spinnerClasses={[spinnerBig, spinnerBlack]}
          onClick={hendleClick}
        />
        <BtnTextLoading
          classes={[btnLoadingMedium, backInDark]}
          spinnerClasses={[spinnerMedium, spinnerGrayLight]}
          onClick={hendleClick}
        />
        <BtnTextLoading
          classes={[btnLoadingSmall, ghost]}
          spinnerClasses={[spinnerSmall, spinnerGrayLight]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция radiobutton */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция radiobutton</p>
        <RadioButton 
        name={1}
        > Some text
        </RadioButton>
        <RadioButton 
        name={2}
        checked
        > Some text
        </RadioButton>
        <RadioButton 
        name={3}
        disabled
        > Some text
        </RadioButton>
        <RadioButton 
        name={4}
        checked
        disabled
        > Some text
        </RadioButton>
      </section>

      {/* Секция checkbox */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция checkbox</p>
        <CheckBox 
        name={1}
        > Some text
        </CheckBox>
        <CheckBox 
        name={2}
        checked
        > Some text
        </CheckBox>
        <CheckBox 
        name={3}
        disabled
        > Some text
        </CheckBox>
        <CheckBox 
        name={4}
        checked
        disabled
        > Some text
        </CheckBox>
      </section>

    </div>
  )
}

export default App
