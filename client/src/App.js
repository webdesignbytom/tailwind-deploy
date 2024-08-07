import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga';
// Pages
import AdminPage from './pages/admin/AdminPage';
import DeveloperPage from './pages/developer/DeveloperPage';
import Error404 from './pages/error/Error404';
import HomePage from './pages/home/HomePage';
import NewsletterSignup from './pages/newsletter/NewsletterSignup';
import RegisterPage from './users/register/RegisterPage';
import TestPage from './pages/test/TestPage';
import UserAgreement from './pages/auth/UserAgreement';
import AboutPage from './pages/about/AboutPage';
import GoalsPage from './pages/goals/GoalsPage';
import FundingPage from './pages/funding/FundingPage';
import FundraisingPage from './pages/funding/FundraisingPage';
import ContactUsPage from './pages/contact/ContactUsPage';
import LoginPage from './users/login/LoginPage';
import LotteryHomePage from './pages/lottery/LotteryHomePage';
import MediaMainPage from './pages/media/MediaMainPage';
import GamesMainPage from './pages/games/GamesMainPage';
import GamesMainPage2 from './pages/games/GamesMainPage2';
import PasswordResetPage from './pages/account/PasswordResetPage';
// Myeco Home Pages
import MyHomeMain from './pages/myecohome/MyHomeMain';
import SearchBarEcoHome from './pages/myecohome/SearchBarEcoHome';
// Utils
import {
  AuthenticateUser,
  AuthenticateAdmin,
  AuthenticateDeveloper,
} from './utils/AuthenticateUser';
import AppPageHomePage from './pages/myecohome/AppPageHomePage';
import SketchPadHomePage from './pages/myecohome/SketchPadHomePage';
import NewsPageHomePage from './pages/myecohome/NewsPageHomePage';
import MirrorHomePage from './pages/myecohome/MirrorHomePage';
import HomePage2 from './pages/home/HomePage2';
import AboutUsPage from './pages/about/AboutUsPage';
import TheDailysHomePage from './pages/myecohome/TheDailysHomePage';
import MyecohomeMainPage from './pages/myecohome/MyecohomeMainPage';
import BioClickerMainGamePage from './pages/games/bioClicker/BioClickerMainGamePage';
import EcoCityMainGamePage from './pages/games/ecoCity/EcoCityMainGamePage';
import CustomMyecohomePage from './pages/myecohome/CustomMyecohomePage';
import TimelinePage from './pages/timeline/TimelinePage';
import ContactMyecoappPage from './pages/contact/ContactMyecoappPage';
import EcoEventsMainPage from './pages/ecoEvents/EcoEventsMainPage';
import DonationsPage from './pages/donations/DonationsPage';
import ServicesPage from './pages/services/ServicesPage';
import ProfileMainPage from './pages/account/profile/ProfileMainPage';
import AppsMainPage from './pages/apps/AppsMainPage';
import SiteDownPage from './pages/temp/SiteDownPage';
// Constants
import {
  HOME_URL,
  HOME_URL_2,
  ABOUT_US_URL,
  ABOUT_MYEOAPP_URL,
  GOALS_URL,
  FUNDING_URL,
  FUNDING_2_URL,
  CONTACT_US_URL,
  MEDIA_URL,
  TIMELINE_URL,
  EVENTS_URL,
  DONATIONS_URL,
  SERVICES_URL,
  APPS_URL,
  GAMES_HOME_URL,
  GAMES_2_URL,
  BIO_CLICKER_GAME_URL,
  ECO_CITY_GAME_URL,
  PETIGOTCHI_GAME_URL,
  MYECOHOME_URL,
  MYECOHOME_2_URL,
  SEARCH_HOME_URL,
  MIRROR_HOME_URL,
  NEWS_HOME_URL,
  SKETCH_HOME_URL,
  APPS_PAGE_HOME_URL,
  THE_DAILYS_URL,
  CUSTOM_MYEOHOME_URL,
  LOTTERY_HOME_URL,
  PROFILE_URL,
  NEWSLETTER_SIGNUP_URL,
  LOGIN_URL,
  SIGN_UP_URL,
  RESET_PASSWORD_URL,
  ADMIN_URL,
  DEVELOPMENT_URL,
  USER_COOKIE_POLICY_URL,
  TERMS_AND_CONDITIONS_URL,
  TEST_URL,
  ERROR_404_URL,
} from './utils/Constants';
const AnalCode = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

function App() {
  const [siteDown] = useState(false); // Set to true to redirect all routes to the SiteDownPage

  ReactGA.initialize(AnalCode);
  ReactGA.pageview(HOME_URL);

  if (siteDown) {
    return <SiteDownPage />;
  }

  return (
    <>
      <Routes>
        {siteDown && (
          <>
            <Route
              path={NEWSLETTER_SIGNUP_URL}
              element={<NewsletterSignup />}
            />
            <Route path='*' element={<SiteDownPage />} />
          </>
        )}
        {!siteDown && (
          <>
            <Route path={HOME_URL} index element={<HomePage />} />
            <Route path={HOME_URL_2} index element={<HomePage2 />} />

            {/* General */}
            <Route path={ABOUT_US_URL} element={<AboutPage />} />
            <Route path={ABOUT_MYEOAPP_URL} element={<AboutUsPage />} />
            <Route path={GOALS_URL} element={<GoalsPage />} />
            <Route path={FUNDING_URL} element={<FundingPage />} />
            <Route path={FUNDING_2_URL} element={<FundraisingPage />} />
            <Route path={CONTACT_US_URL} element={<ContactMyecoappPage />} />
            <Route path={MEDIA_URL} element={<MediaMainPage />} />
            <Route path={TIMELINE_URL} element={<TimelinePage />} />
            <Route path={EVENTS_URL} element={<EcoEventsMainPage />} />
            <Route path={DONATIONS_URL} element={<DonationsPage />} />
            <Route path={SERVICES_URL} element={<ServicesPage />} />
            <Route path={APPS_URL} element={<AppsMainPage />} />

            {/* Games */}
            <Route path={GAMES_HOME_URL} element={<GamesMainPage />} />
            <Route path={GAMES_2_URL} element={<GamesMainPage2 />} />
            <Route
              path={BIO_CLICKER_GAME_URL}
              element={<BioClickerMainGamePage />}
            />
            <Route path={ECO_CITY_GAME_URL} element={<EcoCityMainGamePage />} />
            <Route
              path={PETIGOTCHI_GAME_URL}
              element={<EcoCityMainGamePage />}
            />

            {/* Myeco Home Pages */}
            <Route path={MYECOHOME_URL} element={<MyHomeMain />} />
            <Route path={MYECOHOME_2_URL} element={<MyecohomeMainPage />} />
            <Route path={SEARCH_HOME_URL} element={<SearchBarEcoHome />} />
            <Route path={MIRROR_HOME_URL} element={<MirrorHomePage />} />
            <Route path={NEWS_HOME_URL} element={<NewsPageHomePage />} />
            <Route path={SKETCH_HOME_URL} element={<SketchPadHomePage />} />
            <Route path={APPS_PAGE_HOME_URL} element={<AppPageHomePage />} />
            <Route path={THE_DAILYS_URL} element={<TheDailysHomePage />} />
            <Route
              path={CUSTOM_MYEOHOME_URL}
              element={<CustomMyecohomePage />}
            />

            {/* Lottery */}
            <Route path={LOTTERY_HOME_URL} element={<LotteryHomePage />} />

            {/* User routes */}
            <Route path={PROFILE_URL} element={<ProfileMainPage />} />
            <Route
              path={NEWSLETTER_SIGNUP_URL}
              element={<NewsletterSignup />}
            />
            <Route path={LOGIN_URL} element={<LoginPage />} />
            <Route path={SIGN_UP_URL} element={<RegisterPage />} />
            <Route path={RESET_PASSWORD_URL} element={<PasswordResetPage />} />

            {/* Secure routes */}
            <Route
              path={ADMIN_URL}
              element={
                <AuthenticateAdmin>
                  <AdminPage />
                </AuthenticateAdmin>
              }
            />
            <Route
              path={DEVELOPMENT_URL}
              element={
                <AuthenticateDeveloper>
                  <DeveloperPage />
                </AuthenticateDeveloper>
              }
            />

            {/* Util Routes */}
            <Route path={USER_COOKIE_POLICY_URL} element={<UserAgreement />} />
            <Route
              path={TERMS_AND_CONDITIONS_URL}
              element={<UserAgreement />}
            />
            <Route path={TEST_URL} element={<TestPage />} />
            <Route path={ERROR_404_URL} element={<Error404 />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
