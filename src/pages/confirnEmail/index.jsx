import './style.css'
import { Link } from 'react-router-dom'
import { LogoText } from '../../utilits/icon/logoText'
import BtnText from '../../components/UI/btnText/btnText'
import { useNavigate } from 'react-router-dom'

export default function ConfirmEmailPage() {
  const primary = 'color-primary'
  const highlightLight = 'color-highlight-light'
  const btnTextBig = 'btn-text-big'
  const navigate = useNavigate()

  const handleSentMessage = () => {
    console.log('sent message');
  }


  return (
    <main className="mainAuth">
      <div className="wrapAuth">

        <Link to="/">
          <LogoText />
        </Link>

        <div className="confirmInfo">
          <h2 className="titleAuth">Пожалуйста, подтвердите вашу почту</h2>
        <p className="textAuth">На вашу почту <span className="textAuthBold">neonet.sergey@gmail.com </span> отправлено письмо с ссылкой для подтверждения. Для завершения регистрации пройдите по ссылке.</p>
        </div>

        <div className="confirmInfo">
        <p className="textAuthH3">Не пришло письмо?</p>
        <BtnText
            classes={[btnTextBig, primary]}
            onClick={handleSentMessage}
          >
            Отправить повторно
          </BtnText>
          <BtnText
            classes={[btnTextBig, highlightLight]}
            onClick={() => {navigate("/Auth")}}
          >
            Вернуться назад
          </BtnText>
        </div>

      </div>
    </main>
  )
}
