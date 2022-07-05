import "./App.css";
import Home from "../src/Home";
import Footer from "./componentes/Footer";
import Insta from "./componentes/Insta";
import Dashboard from "./componentes/dashboard";
import Order from "./componentes/Order";
import GraphicsDesign from "./componentes/GraphicsDesign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialMarketing from "./componentes/Social-Marketing";
import Gigs from "./componentes/Gigs";
import TACWorkspace from "./componentes/TACWorkspace";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home user={true} />} />
        <Route exact path="/home" element={<Home user={true} />} />
        <Route exact path="/insta" element={<Insta />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/gigs" element={<Gigs />} />
        <Route exact path="/socialmarketing" element={<SocialMarketing />} />
        <Route exact path="/Graphics&Design" element={<GraphicsDesign />} />
        <Route exact path="/TACworkspace" element={<TACWorkspace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
