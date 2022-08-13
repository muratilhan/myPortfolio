import './App.css';
import About from './components/About.jsx'
import Techologies from './components/Technologies.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home';
import Memories from './components/Memories';
import Projects from './components/Projects.jsx'
import Header from './components/Header.jsx'
function App() {
  return (
    <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Techologies/>
            <Projects/>
            <Memories/>
            <Contact/>
    </div>
  );
}

export default App;
