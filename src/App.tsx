import AppNavbar from "./page-parts/AppNavbar";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import ProfileFeed from "./pages/ProfileFeed";

function App() {
  return (
    <div className="h-screen">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<ProfileFeed />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
