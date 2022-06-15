import "./App.css";

import Home from "../src/Home";
import Footer from "./componentes/Footer";
import Insta from "./componentes/Insta";
import Dashboard from "./componentes/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home user={true} />} />
				<Route exact path="/home" element={<Home user={true} />} />
				<Route exact path="/insta" element={<Insta />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
