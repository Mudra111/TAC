import './App.css';
import Header from "../src/Header";
import Home from "../src/Home";
import Footer from "./componentes/Footer";
import Insta from "./componentes/Insta";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/insta" element={<Insta/>}/>
      </Routes>
      <Footer/>
      </Router>
  );
}

export default App;
