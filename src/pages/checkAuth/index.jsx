import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LogoText } from '../../utilits/icon/logoText'
import InputEmail from '../../components/UI/inputEmail/inputEmail'
import BtnText from '../../components/UI/btnText/btnText'
import { ArrowRight } from '../../utilits/icon/arrowRight'

export default function CheckAuthPage({ setIsLoginMode, isLoginMode }) {
  const colorInputIconDark = 'dark'
  const primary = 'color-primary'
  const btnTextBig = 'btn-text-big'
  const navigate = useNavigate()
  const handleCheck = () => {
    setIsLoginMode(!isLoginMode)
    navigate('/Auth')
  }

  return (
    <main className={styles.mainAuth}>
      <div className={styles.wrapCheck}>
        <Link to="/">
          <LogoText />
        </Link>
        <h2 className={styles.titleCheck}>Войдите или зарегистрируйтесь</h2>
        <form action="" className={styles.auth}>
          <InputEmail classes={[]} colorIcon={colorInputIconDark} />
          <BtnText
            classes={[btnTextBig, primary]}
            iconRight={<ArrowRight />}
            onClick={handleCheck}
          >
            Продолжить
          </BtnText>
        </form>
      </div>
    </main>
  )
}
