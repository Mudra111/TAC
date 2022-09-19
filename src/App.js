import "./App.css";
import Home from "../src/Home";
import Footer from "./componentes/Footer";
import Insta from "./componentes/Insta";
import Dashboard from "./componentes/dashboard";
import Order from "./componentes/Order1";
import GraphicsDesign from "./componentes/GraphicsDesign";
import DashboardMain from "./componentes/DashboardMain";
import TACWorkScomp1 from "./componentes/TAC_WorkS_comp1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialMarketing from "./componentes/Social-Marketing";
import TACWorkspace from "./componentes/TACWorkspace";
import Gigs from "./componentes/Gigs";
import Gigs1 from "./componentes/Gigs1";
import HomePage from "./componentes/Home_Page";
import Buyerdashboard from "./componentes/Buyerdashboard";
import TAC_Business from "./componentes/TAC_Business";
import PostaReq from "./componentes/Post_a_Req";
import TAC_Community from "./componentes/TAC_Community";

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
        <Route exact path="/gigs1" element={<Gigs1 />} />
        <Route exact path="/socialmarketing" element={<SocialMarketing />} />
        <Route exact path="/Graphics&Design" element={<GraphicsDesign />} />
        <Route exact path="/TACworkspace" element={<TACWorkspace />} />
        <Route exact path="/DashBoardMain" element={<DashboardMain />} />
        <Route exact path="/tacworksc1" element={<TACWorkScomp1 />} />
        <Route exact path="/Home_page" element={<HomePage />} />
        <Route exact path="/buyer_dashboard" element={<Buyerdashboard />} />
        <Route exact path="/TAC_Business" element={<TAC_Business />} />
        <Route exact path="/postareq" element={<PostaReq />} />
        <Route exact path="/TAC_Community" element={<TAC_Community />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
