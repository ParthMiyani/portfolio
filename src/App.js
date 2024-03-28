import "./App.css";
import "./fonts/CovikSans/CovikSansDemo-Regular.otf";
import Header from "./components/views/Header";
import Home from "./components/views/Home";
import Contact from "./components/views/Contact";
import Experiences from "./components/views/Experiences";
import Projects from "./components/views/Projects";
import Skills from "./components/views/Skills";
import CssBaseline from "@mui/material/CssBaseline";
import Background from "./components/ui/Background";
import FloatingNav from "./components/ui/FlaotingNav";

function App() {
  return (
    <>
      <CssBaseline />
      {/* <Background /> */}
      <div className="app">
        <Header name="Parth Miyani" />
        <Home />
        <FloatingNav />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
