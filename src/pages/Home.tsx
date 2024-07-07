import { Link } from "react-router-dom";

const Home = () => {
	return (
		<h1 className="text-5xl font-bold">
			<Link to={"/shop"}>Shop</Link>
		</h1>
	);
};

export default Home;
