import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import MyStoriesPage from "./pages/MyStoriesPage";
import Layout from "./components/Layout";
import GenerateStory from "./components/story/GenerateStory";
import GeneratedStory from "./components/story/GeneratedStory";
import StoryPage from "./pages/StoryPage";

function App() {

  return (
    <div className="max-h-full max-w-[1920px] w-full flex flex-col">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<Navigate to={"/home"} replace />}></Route>
        <Route path="/home" element={<Layout />}>
          <Route
            index
            element={<Navigate to={"/home/stories"} replace />}
          ></Route>
          <Route element={<HomePage />}>
            <Route path="stories" element={<StoriesPage />} />
            <Route path="story/:id" element={<StoryPage />} />
            <Route path="mystories" element={<MyStoriesPage />} />
            <Route path="generate" element={<GenerateStory />} />
            <Route path="generated" element={<GeneratedStory />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
