import BtnText from './components/UI/btnText/btnText'
import BtnTextLoading from './components/UI/btnTextLoading/btnTextLoading'
import BtnArrow from './components/UI/btnArrow/btnArrow'
import RadioButton from './components/UI/radioButton/radioButton'
import CheckBox from './components/UI/checkBox/checkBox'
import InputText from './components/UI/inputText/inputText'
import InputPassword from './components/UI/inputPassword/inputPassword'
import InputArea from './components/UI/inputArea/inputArea'
import InputTel from './components/UI/inputTel/inputTel'

// основные цвета
const primary = 'color-primary'
const secondary = 'color-secondary'
const ghost = 'color-ghost'
const backInDark = 'color-back-in-dark'
const active = 'color-active'
const activeDark = 'color-active-dark'
const brand = 'color-brand'
const disabled = 'disabled'
const disabledDark = 'disabled-dark'
const negativeInput = 'color-negative-input'

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

// цвета спиннера
const spinnerGrayDark = 'spinner-gray-dark'

// размеры спиннера
const spinnerBig = 'spinner-big'
const spinnerMedium = 'spinner-medium'
const spinnerSmall = 'spinner-small'

// цвета для иконок и текста в инпутах
const colorInputIconDark = 'dark'
const colorInputIconGray = 'gray'
const colorTextGray = 'dark-side-input-text'

export default function App() {
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
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, primary]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, primary]}
          arrowClasses={[arrowSmallText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextBig, secondary]}
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, secondary]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, secondary]}
          arrowClasses={[arrowSmallText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextBig, ghost]}
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, ghost]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, ghost]}
          arrowClasses={[arrowSmallText]}
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
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, primary]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, primary]}
          arrowClasses={[arrowSmallText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextBig, backInDark]}
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, backInDark]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, backInDark]}
          arrowClasses={[arrowSmallText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextBig, ghost]}
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, ghost]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, ghost]}
          arrowClasses={[arrowSmallText]}
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
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextMedium, active]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextSmall, active]}
          arrowClasses={[arrowSmallText]}
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
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextMedium, activeDark]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
        > Active
        </BtnText>

        <BtnText 
          classes={[btnTextSmall, activeDark]}
          arrowClasses={[arrowSmallText]}
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
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, primary]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, primary]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, secondary]}
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, secondary]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, secondary]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, ghost]}
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, ghost]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, ghost]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция кнопок со стрелками в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция кнопок со стрелками в тёмной теме</p>
        <BtnArrow
          classes={[btnArrowBig, primary]}
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, primary]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, primary]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, backInDark]}
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, backInDark]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, backInDark]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />

        <BtnArrow
          classes={[btnArrowBig, ghost]}
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, ghost]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, ghost]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция активных кнопок со стрелками */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция активных кнопок со стрелками</p>
        <BtnArrow
          classes={[btnArrowBig, active]}
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, active]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, active]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция активных кнопок со стрелками в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция активных кнопок со стрелками в тёмной теме</p>
        <BtnArrow
          classes={[btnArrowBig, activeDark]}
          arrowClasses={[arrowBig]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowMedium, activeDark]}
          arrowClasses={[arrowMedium]}
          onClick={hendleClick}
        />
        <BtnArrow
          classes={[btnArrowSmall, activeDark]}
          arrowClasses={[arrowSmall]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция кнопок с загрузкой */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция кнопок с загрузкой</p>
        <BtnTextLoading
          classes={[btnLoadingBig, brand]}
          spinnerClasses={[spinnerBig]}
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
          spinnerClasses={[spinnerBig]}
          onClick={hendleClick}
        />
        <BtnTextLoading
          classes={[btnLoadingMedium, backInDark]}
          spinnerClasses={[spinnerMedium]}
          onClick={hendleClick}
        />
        <BtnTextLoading
          classes={[btnLoadingSmall, ghost]}
          spinnerClasses={[spinnerSmall]}
          onClick={hendleClick}
        />
      </section>

      {/* Секция disabled кнопок */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция disabled кнопок</p>
        <BtnText
          classes={[btnTextBig, disabled]}
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
          disabled
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, disabled]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
          disabled
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, disabled]}
          arrowClasses={[arrowSmallText]}
          onClick={hendleClick}
          disabled
        > Active
        </BtnText>

        <BtnTextLoading
          classes={[btnLoadingBig, disabled]}
          spinnerClasses={[spinnerBig]}
          onClick={hendleClick}
          disabled
        />
        <BtnTextLoading
          classes={[btnLoadingMedium, disabled]}
          spinnerClasses={[spinnerMedium]}
          onClick={hendleClick}
          disabled
        />
        <BtnTextLoading
          classes={[btnLoadingSmall, disabled]}
          spinnerClasses={[spinnerSmall]}
          onClick={hendleClick}
          disabled
        />
      </section>

      {/* Секция disabled кнопок в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция disabled кнопок в тёмной теме</p>
        <BtnText
          classes={[btnTextBig, disabledDark]}
          arrowClasses={[arrowBigText]}
          onClick={hendleClick}
          disabled
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextMedium, disabledDark]}
          arrowClasses={[arrowMediumText]}
          onClick={hendleClick}
          disabled
        > Active
        </BtnText>
        <BtnText 
          classes={[btnTextSmall, disabledDark]}
          arrowClasses={[arrowSmallText]}
          onClick={hendleClick}
          disabled
        > Active
        </BtnText>

        <BtnTextLoading
          classes={[btnLoadingBig, disabledDark]}
          spinnerClasses={[spinnerBig]}
          onClick={hendleClick}
          disabled
        />
        <BtnTextLoading
          classes={[btnLoadingMedium, disabledDark]}
          spinnerClasses={[spinnerMedium]}
          onClick={hendleClick}
          disabled
        />
        <BtnTextLoading
          classes={[btnLoadingSmall, disabledDark]}
          spinnerClasses={[spinnerSmall]}
          onClick={hendleClick}
          disabled
        />
      </section>

      {/* Секция radiobutton */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция radiobutton</p>
        <RadioButton 
        name={1}
        > no checked
        </RadioButton>
        <RadioButton 
        name={2}
        checked
        > checked
        </RadioButton>
        <RadioButton 
        name={3}
        disabled
        > no checked and disabled
        </RadioButton>
        <RadioButton 
        name={4}
        checked
        disabled
        > checked and disabled
        </RadioButton>
      </section>

      {/* Секция radiobutton в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция radiobutton в тёмной теме </p>
        <RadioButton 
        name={11}
        > no checked
        </RadioButton>
        <RadioButton 
        name={12}
        checked
        > checked
        </RadioButton>
        <RadioButton 
        name={13}
        disabled
        > no checked and disabled
        </RadioButton>
        <RadioButton 
        name={14}
        checked
        disabled
        > checked and disabled
        </RadioButton>
      </section>

      {/* Секция checkbox */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция checkbox</p>
        <CheckBox 
        name={1}
        > no checked
        </CheckBox>
        <CheckBox 
        name={2}
        checked
        > checked
        </CheckBox>
        <CheckBox 
        name={3}
        disabled
        > no checked and disabled
        </CheckBox>
        <CheckBox 
        name={4}
        checked
        disabled
        > checked and disabled
        </CheckBox>
      </section>

      {/* Секция checkbox в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция checkbox в тёмной теме</p>
        <CheckBox 
        name={11}
        > no checked
        </CheckBox>
        <CheckBox 
        name={12}
        checked
        > checked
        </CheckBox>
        <CheckBox 
        name={13}
        disabled
        > no checked and disabled
        </CheckBox>
        <CheckBox 
        name={14}
        checked
        disabled
        > checked and disabled
        </CheckBox>
      </section>

      {/* Секция инпутов */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция инпутов</p>
        <InputText
        classes={[]}
        colorIcon={colorInputIconDark}
        > Title
        </InputText>
        <InputPassword
        classes={[]}
        colorIcon={colorInputIconDark}
        > Title
        </InputPassword>
        <InputArea
        classes={[]}
        colorIcon={colorInputIconDark}
        > Title
        </InputArea>
        <InputTel
        classes={[]}
        colorIcon={colorInputIconDark}
        > Title
        </InputTel>
      </section>

      {/* Секция инпутов в тёмной теме */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция инпутов в тёмной теме</p>
        <InputText
        classes={[colorTextGray]}
        colorIcon={colorInputIconGray}
        > Title
        </InputText>
        <InputPassword
        classes={[colorTextGray]}
        colorIcon={colorInputIconGray}
        > Title
        </InputPassword>
        <InputArea
        classes={[colorTextGray]}
        colorIcon={colorInputIconGray}
        > Title
        </InputArea>
        <InputTel
        classes={[colorTextGray]}
        colorIcon={colorInputIconGray}
        > Title
        </InputTel>
      </section>

      {/* Секция инпутов с ошибкой */}
      <section className="section">
        <hr></hr>
        <p className='text'>Секция инпутов с ошибкой</p>
        <InputText
        classes={[negativeInput]}
        colorIcon={colorInputIconDark}
        > Title
        </InputText>
        <InputPassword
        classes={[negativeInput]}
        colorIcon={colorInputIconDark}
        > Title
        </InputPassword>
        <InputArea
        classes={[negativeInput]}
        colorIcon={colorInputIconDark}
        > Title
        </InputArea>
        <InputTel
        classes={[negativeInput]}
        colorIcon={colorInputIconDark}
        > Title
        </InputTel>
      </section>

      {/* Секция инпутов в тёмной теме с ошибкой */}
      <section className="section dark-side">
        <hr></hr>
        <p className='text'>Секция инпутов в тёмной теме с ошибкой</p>
        <InputText
        classes={[colorTextGray, negativeInput]}
        colorIcon={colorInputIconGray}
        > Title
        </InputText>
        <InputPassword
        classes={[colorTextGray, negativeInput]}
        colorIcon={colorInputIconGray}
        > Title
        </InputPassword>
        <InputArea
        classes={[colorTextGray, negativeInput]}
        colorIcon={colorInputIconGray}
        > Title
        </InputArea>
        <InputTel
        classes={[colorTextGray, negativeInput]}
        colorIcon={colorInputIconGray}
        > Title
        </InputTel>
      </section>

    </div>
  )
}
