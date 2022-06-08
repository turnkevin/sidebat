import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./pages/Analytics/Analytics";
import Appearance from "./pages/Appearance/Appearance";
import Links from "./pages/Links/Links";
import News from "./pages/News/News";
import Settings from "./pages/Settings/Settings";
import Support from "./pages/Support/Support";
import Upgrade from "./pages/Upgrade/Upgrade";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/appearance" element={<Appearance />} />
        <Route path="/links" element={<Links />} />
        <Route path="/news" element={<News />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </Router>
  );
};

export default App;
