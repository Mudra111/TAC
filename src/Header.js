import Header1 from "./componentes/Header1";

import { useState } from "react";

function Header() {
	const [navbar, setNavbar] = useState(false);

	const changeHeader = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeHeader);

	return (
		<div>
			<Header1 navbar = {navbar}/>
			
		</div>
	);
}

export default Header;
