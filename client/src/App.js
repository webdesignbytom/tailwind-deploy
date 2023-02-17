import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './users/Login';
import Register from './users/Register';

function App() {
  return (
    <div className='dark:bg-black'>
      <Routes>
        <Route path='/' element={<Home />} index />

        {/* User routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </div>
  );
}

export default App;
