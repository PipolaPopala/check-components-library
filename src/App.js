import Header from './components/header/header'
// import Pass from './components/pass/pass'
import PassAdd from './components/passAdd/passAdd'
import PassPerson from './components/passPerson/passPerson'
import PassCar from './components/passCar/passCar'

export default function App() {
    return (
      <>
        <Header />
        {/* <Pass /> */}
        <PassAdd />
        <PassPerson />
        <PassCar />
      </>
    )
}
