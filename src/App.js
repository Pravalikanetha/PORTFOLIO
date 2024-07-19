import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/navbar';
import About from './components/about_me/about';
import Header from './components/header/header';
import Experience from './components/experience/experience';
import Project from './components/projects/project';
import Contact from './components/contacts/contact';
import Footer from './components/footer/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Header/>}/>
            <Route exact path="/about_me/about" element={<About/>}/>
            <Route exact path="/experience/experience" element={<Experience/>}/>
            <Route exact path="/projects/project" element={<Project/>}/>
            <Route exact path="/contacts/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
