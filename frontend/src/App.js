import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";


function App() {
  let location = useLocation();
  return (
    <div className="max-h-full max-w-[1920px] w-full">
      {location.pathname === "/login" ||
      location.pathname === "/signup" ? null : (
        <Navbar />
      )}
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/">
          <Route index element={<Navigate to="/home/stories" replace />} />
          <Route path="home/*" element={<HomePage />}/>
        </Route>
        <Route path="*" element={<Navigate to="/home/stories" replace />} />
      </Routes>
    </div>
  );
}

export default App;
