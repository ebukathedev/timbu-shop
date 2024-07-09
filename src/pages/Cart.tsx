import Breadcrumb from "../components/Breadcrumb";
import RelatedProducts from "../components/RelatedProducts";
import MobileCartContent from "../components/MobileCartContent";
import DesktopCartContent from "../components/DesktopCartContent";
import useScroll from "../contexts/hooks/use-scroll";

const Cart = () => {
	useScroll();

	return (
		<>
			<Breadcrumb pageTitle="Cart" showBreadcrumb="back" />
			<section className="mb-14 sm:mb-24">
				<MobileCartContent />
				<DesktopCartContent />
				<RelatedProducts />
			</section>
		</>
	);
};

export default Cart;
