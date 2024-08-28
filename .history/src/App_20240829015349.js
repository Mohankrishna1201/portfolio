import logo from './logo.svg';
import './App.css';
import './components/timeline.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";

import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Iam from './components/Iam';
import TimeLine from './components/TimeLine';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <div className='exp'>
        <TimeLine />
        <Projects />
      </div>
      <Contact />

    </div>
  );
}

export default App;
