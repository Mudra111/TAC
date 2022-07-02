import "./App.css";
import Home from "../src/Home";
import Footer from "./componentes/Footer";
import Insta from "./componentes/Insta";
import Dashboard from "./componentes/dashboard";
import Order from "./componentes/Order";
import GraphicsDesign from "./componentes/GraphicsDesign";
import DashboardMain from "./componentes/DashboardMain";
import TAC_WorkS_comp1 from "./componentes/TAC_WorkS_comp1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialMarketing from "./componentes/Social-Marketing";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home user={true} />} />
				<Route exact path="/home" element={<Home user={true} />} />
				<Route exact path="/insta" element={<Insta />} />
				<Route exact path="/Graphics&Design" element={<GraphicsDesign />} />
				<Route exact path="/DashBoardMain" element={<DashboardMain />} />
				<Route exact path="/socialmarketing" element={<SocialMarketing />} />
				<Route exact path="/tacworksc1" element={<TAC_WorkS_comp1 />} />
				<Route exact path="/order" element={<Order />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
