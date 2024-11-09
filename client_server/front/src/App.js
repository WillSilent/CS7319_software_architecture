import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from '@/pages/Login'
import Register from '@/pages/Register'
import DashBoard from '@/pages/DashBoard'
import Home from '@/pages/Home'
import Tournament from '@/pages/Tournament'
import Equip from '@/pages/Equipment'
import Courtmate from '@/pages/Courtmate'
import Location from '@/pages/Location'
import Post from '@/pages/Post'
import Profile from '@/pages/Profile'
import Admin from '@/pages/Admin'

import '@/App.css'



function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route index element={<Home />} />
            <Route path="/game" element={<Tournament />} />
            <Route path="/equip" element={<Equip />} />
            <Route path="/courtmate" element={<Courtmate />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
          {/* <Route path="/search" element={<Login />}></Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
