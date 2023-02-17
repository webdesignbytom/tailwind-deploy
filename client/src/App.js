import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './users/Login';
import Register from './users/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />

        {/* User routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
