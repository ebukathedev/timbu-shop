import Breadcrumb from "../components/Breadcrumb";
import RelatedProducts from "../components/RelatedProducts";
import MobileCartContent from "../components/MobileCartContent";
import DesktopCartContent from "../components/DesktopCartContent";
import useScroll from "../contexts/hooks/use-scroll";
import { useContext } from "react";
import { CartModalContext } from "../contexts/cart-modal-context";
import CartSuccess from "../components/modals/CartSuccess";

const Cart = () => {
	const { isCartSuccessModalOpen } = useContext(CartModalContext);
	useScroll();

	return (
		<>
			<Breadcrumb pageTitle="Cart" showBreadcrumb="back" />
			<section className="mb-14 sm:mb-24">
				{isCartSuccessModalOpen && <CartSuccess />}
				<MobileCartContent />
				<DesktopCartContent />
				<RelatedProducts />
			</section>
		</>
	);
};

export default Cart;
