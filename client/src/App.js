import { Route, Routes } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga';
// Pages
import Account from './pages/account/Account';
import AdminPage from './pages/admin/AdminPage';
import DeveloperPage from './pages/developer/DeveloperPage';
import Home from './pages/home/Home';
import MyecohomeMain from './pages/myecohome/MyecohomeMain';
import TestPage from './pages/test/TestPage';
import Error404 from './pages/error/Error404';
import UserAgreement from './pages/auth/UserAgreement'
import TemporaryHome from './pages/home/TemporaryHome';
import AboutPage from './pages/about/AboutPage';
// Prestyled components
import './styles/components.css';
// Utils
import {
  AuthenticateUser,
  AuthenticateAdmin,
  AuthenticateDeveloper,
} from './utils/AuthenticateUser';

function App() {
  ReactGA.initialize('G-5TSPX20DLD');
  ReactGA.pageview('/');

  return (
    <>
      <Routes>
        <Route path='/' element={<TemporaryHome />} index />
        <Route path='/myecohome' element={<MyecohomeMain />} />
        <Route path='/about' element={<Home />} />
        <Route
          path='/account'
          element={
            <AuthenticateUser>
              <Account />
            </AuthenticateUser>
          }
        />
        {/* User routes */}
        <Route path='/login' />
        <Route path='/register' />

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
