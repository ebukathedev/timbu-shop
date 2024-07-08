import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
	return (
		<footer className="bg-secondary">
			<div className="container flex flex-col pt-8 text-sm pb-14 gap-y-6 lg:flex-row lg:items-center lg:justify-around lg:text-base lg:pt-14 lg:pb-20">
				<Link to="/" className="block w-16 md:w-20 lg:w-24 xl:w-auto">
					<img src={logo} alt="timbu" />
				</Link>
				<div className="text-black space-y-4 lg:max-w-md">
					<div className="text-base font-medium lg:text-xl">
						About Us
					</div>
					<p className="leading-[2rem]">
						Timbu shop provides you with a wide range of skincare
						products to meet your bodycare needs.
					</p>
				</div>
				<div className="flex justify-center gap-6 lg:flex-col">
					<span>contact@timbu.org</span>
					<span>(+234)810-4237-419</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
