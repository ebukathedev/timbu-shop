import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
	return (
		<footer className="bg-secondary">
			<div className="container flex flex-col pt-8 text-sm pb-14 gap-y-6">
				<Link to="/" className="block w-16 md:w-20 lg:w-24 xl:w-auto">
					<img src={logo} alt="timbu" />
				</Link>
				<div className="space-y-4 text-black">
					<div className="text-base font-medium">About Us</div>
					<p className="leading-[2rem]">
						Timbu shop provides you with a wide range of skincare
						products to meet your bodycare needs.
					</p>
				</div>
				<div className="flex justify-center gap-6">
					<span>contact@timbu.org</span>
					<span>(+234)810-4237-419</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
