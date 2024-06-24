import { useEffect } from "react";
import { toggleSiteTheme } from "./functions/toggleSiteTheme";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";

let initial: boolean = true;

function App() {
  useEffect(() => {
    if (initial) {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      toggleSiteTheme(prefersDarkMode ? "dark" : "light");
    }
    initial = false;
  }, []);

  return (
    <div id="site-wrapper" className="bg-site-backgound w-screen h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
