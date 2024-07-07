import logo from "../assets/logo.svg";
import cartButton from "../assets/icons/cart-button.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="py-3 font-bold text-gray-300 bg-secondary font-lato xl:py-5 xl:text-lg">
			<nav className="container flex items-center justify-between">
				<Link to="/" className="w-16 md:w-20 lg:w-24 xl:w-auto">
					<img src={logo} alt="timbu" />
				</Link>
				<div>
					<img
						src={cartButton}
						alt="profile pic"
						className="w-11 lg:w-auto"
					/>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
