import Breadcrumb from "../components/Breadcrumb";
import CartItem from "../components/CartItem";

const Cart = () => {
	return (
		<>
			<Breadcrumb pageTitle="Cart" showBreadcrumb="back" />
			<section>
				<CartItem />
			</section>
		</>
	);
};

export default Cart;
