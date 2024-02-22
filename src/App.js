import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
