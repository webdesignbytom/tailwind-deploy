import { Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/home/Home'
import Login from './users/Login';
import Register from './users/Register';
import Myecohome from './pages/myecohome/Myecohome';
import Profile from './pages/profile/Profile';
import Account from './pages/account/Account';
// Prestyled components
import './styles/components.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/myecohome' element={<Myecohome />} />
        <Route path='/account' element={<Account />} />
        <Route path='/profile' element={<Profile />} />

        {/* User routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
