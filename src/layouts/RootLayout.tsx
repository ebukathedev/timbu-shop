import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<Breadcrumb />
			<main className="container">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
