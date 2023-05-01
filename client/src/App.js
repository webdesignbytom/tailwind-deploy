import { Route, Routes } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga';
// Pages
import Account from './pages/account/Account';
import AdminPage from './pages/admin/AdminPage';
import DeveloperPage from './pages/developer/DeveloperPage';
import Error404 from './pages/error/Error404';
import HomePage from './pages/home/HomePage';
import MyecohomeMain from './pages/myecohome/MyecohomeMain';
import NewsletterSignup from './pages/newsletter/NewsletterSignup';
import RegisterPage from './users/register/RegisterPage';
import SearchBarEcoHome from './pages/myecohome/SearchBarEcoHome';
import TestPage from './pages/test/TestPage';
import UserAgreement from './pages/auth/UserAgreement';
import AboutPage from './pages/about/AboutPage';
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
        <Route path='/' index element={<HomePage />} />
        <Route path='/newsletter-signup' element={<NewsletterSignup />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path='/myecohome' element={<MyecohomeMain />} />
        <Route path='/myecohome/search-bar' element={<SearchBarEcoHome />}  />

        {/* User routes */}
        <Route path='/login' />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/account'
          element={
            <AuthenticateUser>
              <Account />
            </AuthenticateUser>
          }
        />

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
