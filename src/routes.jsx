import { Routes, Route } from 'react-router-dom'
// import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react'
import AuthPage from './pages/auth'
import CheckAuthPage from './pages/checkAuth'
import MainPage from './pages/main'
import PageLayout from './pages/layout'
import SelectionPassPage from './pages/selectPass'
import AddPassPage from './pages/addPass/passCar'
import NotFound from './pages/not-found'
import EventsPage from './pages/events'
import PersonalPage from './pages/personal'
import ConfirmEmailPage from './pages/confirnEmail'

function AppRoutes() {
  const [isLoginMode, setIsLoginMode] = useState(false)
  const [isAutoPass, setIsAutoPass] = useState(false)
  return (
    <Routes>
      <Route
        path="/checkAuth"
        element={
          <CheckAuthPage
            setIsLoginMode={setIsLoginMode}
            isLoginMode={isLoginMode}
          />
        }
      />
      <Route path="/Auth" element={<AuthPage isLoginMode={isLoginMode} />} />
      <Route path="/confirmEmail" element={<ConfirmEmailPage/>} />

      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/" element={<PageLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route
          path="/selectionPass"
          element={<SelectionPassPage setIsAutoPass={setIsAutoPass} />}
        />
        <Route
          path="/addPass"
          element={
            <AddPassPage
              isAutoPass={isAutoPass}
              setIsAutoPass={setIsAutoPass}
            />
          }
        />
        <Route path="/personal" element={<PersonalPage />} />
      </Route>
      {/* </Route> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
