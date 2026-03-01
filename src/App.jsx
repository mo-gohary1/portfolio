import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import FireCursor from "./components/ui/FireCursor";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
        <FireCursor />
        <AnimatedBackground />
        <Navbar />
        <main className="pt-24 px-6 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
