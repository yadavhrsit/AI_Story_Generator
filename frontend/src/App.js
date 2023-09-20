import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import MyStoriesPage from "./pages/MyStoriesPage";
import Layout from "./components/Layout";

function App() {

  return (
    <div className="max-h-full max-w-[1920px] w-full">
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<Layout/>}>
          <Route index element = {<Navigate to={'/home/stories'} replace/>}></Route>
          <Route element={<HomePage/>}>
            <Route path="stories" element={<StoriesPage />} />
            <Route path="mystories" element={<MyStoriesPage />} />
          </Route>
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
