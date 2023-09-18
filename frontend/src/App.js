import {BrowserRouter,Routes,Route,Navigate,useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import MyStoriesPage from './pages/MyStoriesPage';

function App() {
  let location = useLocation();
  return (
    <>
      {location.pathname === '/login' || location.pathname === '/signup' ? null : <Navbar/>}
      <Routes>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='signup' element={<SignupPage/>}/>
        <Route path='profile' element={<ProfilePage/>}/>
        <Route path="/">
        <Route index element={<Navigate to="/home" replace />} />  
          <Route path='home' element={<HomePage/>}/>
          <Route path='mystories' element={<MyStoriesPage/>}/> 
        </Route>
      </Routes>   
    </>
  );
}

export default App;
