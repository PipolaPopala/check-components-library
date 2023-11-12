import './style.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoText } from '../../utilits/icon/logoText'
import InputName from '../../components/UI/inputName/inputName'
import InputEmail from '../../components/UI/inputEmail/inputEmail'
import InputPassword from '../../components/UI/inputPassword/inputPassword'
import BtnText from '../../components/UI/btnText/btnText'
import { ArrowRight } from '../../utilits/icon/arrowRight'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../components/Context/UserContext'
import { useContext } from 'react'
// import { useDispatch } from 'react-redux'
import { RegApi, LogInApi } from '../../components/API/AuthApi'

export default function AuthPage({ isLoginMode }) {
  const colorInputIconDark = 'dark'
  const primary = 'color-primary'
  const btnTextBig = 'btn-text-big'

  const navigate = useNavigate()

  const { setUser } = useContext(UserContext)

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [mainNumber, setMainNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [offButton, setOffButton] = useState(false)
  // const dispatch = useDispatch()

  const handleRegistration = async () => {
    try {
      const response = await RegApi(
        fullName,
        dateOfBirth,
        mainNumber,
        email,
        password,
      )
      console.log(response)
      setOffButton(true)
      // setUser(response)
      // localStorage.setItem('user', JSON.stringify(response))
      navigate('/confirmEmail')
    } catch (currenterror) {
      setError(currenterror.message)
      console.log(error)
    } finally {
      setOffButton(false)
      console.log(fullName)
    }
  }

  const handleLogin = async () => {
    try {
      const response = await LogInApi(email, password)
      setOffButton(true)
      setUser(response)
      localStorage.setItem('user', JSON.stringify(response))
      navigate('/')
    } catch (currentError) {
      setError(currentError.message)
      console.log(error)
    } finally {
      setOffButton(false)
    }
  }

  return isLoginMode ? (
    <main className="mainAuth">
      <div className="wrapLogin">
        <Link to="/">
          <LogoText />
        </Link>
        <h2 className="titleLogin">
          С возвращением👋 <br />
          Сергей!
        </h2>
        <form action="" className="auth">
          <InputEmail
            classes={[]}
            colorIcon={colorInputIconDark}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <InputPassword
            classes={[]}
            colorIcon={colorInputIconDark}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <BtnText
            classes={[btnTextBig, primary]}
            iconRight={<ArrowRight />}
            onClick={handleLogin}
            disabled={offButton}
          >
            {offButton ? 'Загружаем информацию...' : 'Продолжить'}
          </BtnText>
        </form>
      </div>
    </main>
  ) : (
    <main className="mainAuth">
      <div className="wrapAuth">
        <Link to="/">
          <LogoText />
        </Link>
        <h2 className="titleAuth">
          Добро пожаловать👋 <br />
          Зарегистрируйтесь!
        </h2>
        <form action="" className="auth">
          <InputName
            classes={[]}
            colorIcon={colorInputIconDark}
            placeholder="Сергей"
            value={fullName}
            onChange={(event) => {
              setFullName(event.target.value)
            }}
          />
          <InputName
            classes={[]}
            colorIcon={colorInputIconDark}
            placeholder="Номер телефона"
            value={mainNumber}
            onChange={(event) => {
              setMainNumber(event.target.value)
            }}
          />
          <InputName
            classes={[]}
            colorIcon={colorInputIconDark}
            placeholder="Дата рождения"
            value={dateOfBirth}
            onChange={(event) => {
              setDateOfBirth(event.target.value)
            }}
          />

          <InputEmail
            classes={[]}
            colorIcon={colorInputIconDark}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
            }}
          />
          <InputPassword
            classes={[]}
            colorIcon={colorInputIconDark}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
          />
          <BtnText
            classes={[btnTextBig, primary]}
            iconRight={<ArrowRight />}
            onClick={handleRegistration}
            disabled={offButton}
          >
            {offButton ? 'Загружаем информацию...' : 'Продолжить'}
          </BtnText>
        </form>
        <div className="agree">
          <p className="agreeText">
            Нажимая кнопку «Продолжить» вы принимаете условия{' '}
          </p>
          <Link to="/" className="agreeLink">
            Пользовательского соглашения
          </Link>
        </div>
      </div>
    </main>
  )
}
