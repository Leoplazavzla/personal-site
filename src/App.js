import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/about";
import Skills from "./components/skills";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Work/>
        <About/>
        <Skills/>
        <Promotion/>
        <Footer/>
    </div>
  );
}

export default App;
