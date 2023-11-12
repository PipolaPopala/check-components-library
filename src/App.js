import './index.css';
import { useState } from 'react';
import UserContext from './components/Context/UserContext';
import AppRoutes from './routes';


export default function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || null)
  return (
    <>
          <UserContext.Provider value={{ user, setUser }}>
          <AppRoutes />
          </UserContext.Provider>

    </>
  )
}
