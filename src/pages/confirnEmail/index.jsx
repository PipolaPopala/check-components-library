import styles from './style.module.css'
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
    <main className={styles.mainAuth}>
      <div className={styles.wrapAuth}>

        <Link to="/">
          <LogoText />
        </Link>

        <div className={styles.confirmInfo}>
          <h2 className={styles.titleAuth}>Пожалуйста, подтвердите вашу почту</h2>
          <p className={styles.textAuth}>На вашу почту <span className="textAuthBold">neonet.sergey@gmail.com </span> отправлено письмо с ссылкой для подтверждения. Для завершения регистрации пройдите по ссылке.</p>
        </div>

        <div className={styles.confirmInfo}>
          <p className={styles.textAuthH3}>Не пришло письмо?</p>
          <BtnText
            classes={[btnTextBig, primary]}
            onClick={handleSentMessage}
          >
            Отправить повторно
          </BtnText>
          <BtnText
            classes={[btnTextBig, highlightLight]}
            onClick={() => { navigate("/Auth") }}
          >
            Вернуться назад
          </BtnText>
        </div>

      </div>
    </main>
  )
}
