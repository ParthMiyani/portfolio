import "./App.css";
import Header from "./components/views/Header";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Contact from "./components/views/Contact";
import Experiences from "./components/views/Experiences";
import Projects from "./components/views/Projects";
import Skills from "./components/views/Skills";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app">
        <Header name="Parth Miyani" />
        <Home />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
