import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

const Footer = () => {
	const location = useLocation();

	return (
		<footer className="bg-secondary">
			<div
				className={`container flex pt-8 text-sm pb-14 gap-y-6 lg:text-base lg:pt-14 lg:pb-20 ${
					location.pathname !== "/checkout"
						? "flex-col lg:items-center lg:justify-around lg:flex-row"
						: "flex-row md:justify-between items-center"
				}`}
			>
				<Link to="/" className="block w-16 md:w-20 lg:w-24 xl:w-auto">
					<img src={logo} alt="timbu" />
				</Link>
				{location.pathname !== "/checkout" && (
					<div className="space-y-4 text-black lg:max-w-md">
						<div className="text-base font-medium lg:text-xl">
							About Us
						</div>
						<p className="leading-[2rem]">
							Timbu shop provides you with a wide range of
							skincare products to meet your bodycare needs.
						</p>
					</div>
				)}
				<div
					className={`flex justify-center  ${
						location.pathname !== "/checkout"
							? "gap-6 lg:flex-col"
							: "gap-8"
					}`}
				>
					<span>contact@timbu.org</span>
					<span>(+234)810-4237-419</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
