import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<Breadcrumb />
			<main className="container">
				<Outlet />
			</main>
			<div>Footer</div>
		</>
	);
};

export default RootLayout;
