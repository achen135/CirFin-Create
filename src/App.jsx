import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Home/Landing'
import Auth from './components/Auth'
import MainLayout from './components/MainAppLayout/MainLayout'
import Account from './pages/Main App/Account/Account'
import MapPage from './pages/Main App/Map/MapPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='CirFin-Create' element={<Landing/>}/>
        <Route path='CirFin-Create/auth' element={<Auth/>}/>

        <Route element={<MainLayout/>}>
          <Route path='CirFin-Create/account' element={<Account/>}/>
          <Route path='CirFin-Create/map' element={<MapPage/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>  
  )
}

export default App