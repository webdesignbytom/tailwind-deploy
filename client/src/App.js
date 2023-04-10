import { Route, Routes } from 'react-router-dom';
// Pages
import Account from './pages/account/Account';
import AdminPage from './pages/admin/AdminPage';
import DeveloperPage from './pages/developer/DeveloperPage';
import Home from './pages/home/Home';
import Login from './users/login/Login';
import Myecohome from './pages/myecohome/Myecohome';
import Register from './users/register/Register';
import TestPage from './pages/test/TestPage';
import Error404 from './pages/error/Error404';
import UserAgreement from './pages/auth/UserAgreement'
// Prestyled components
import './styles/components.css';
// Utils
import {
  AuthenticateUser,
  AuthenticateAdmin,
  AuthenticateDeveloper,
} from './users/utils/AuthenticateUser';
// Analytics
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-2DWCKVD9WK');
  ReactGA.pageview('/');
  ReactGA.pageview('/contact');
  ReactGA.pageview('/design');
  ReactGA.pageview('/portfolio');
  ReactGA.pageview('/login');
  ReactGA.pageview('/store');
  ReactGA.pageview('/new-project');

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/myecohome' element={<Myecohome />} />
        <Route
          path='/account'
          element={
            <AuthenticateUser>
              <Account />
            </AuthenticateUser>
          }
        />
        {/* User routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Secure routes */}
        <Route
          path='/admin'
          element={
            <AuthenticateAdmin>
              <AdminPage />
            </AuthenticateAdmin>
          }
        />
        <Route
          path='/development'
          element={
            <AuthenticateDeveloper>
              <DeveloperPage />
            </AuthenticateDeveloper>
          }
        />

        {/* Util Routes */}
        <Route path='/user-cookie-policy' element={<UserAgreement />} />
        <Route path='/terms-and-conditions' element={<UserAgreement />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
