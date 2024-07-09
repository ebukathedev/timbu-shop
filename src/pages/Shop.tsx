import { useContext, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CartSuccess from "../components/modals/CartSuccess";
import ProductListing from "../components/ProductListing";
import { CartModalContext } from "../contexts/cart-modal-context";
import useScroll from "../contexts/hooks/use-scroll";
import products, { moreProducts, someProducts } from "../data";

const Shop = () => {
	const { isCartSuccessModalOpen } = useContext(CartModalContext);
	const [productDisplay, setProductDisplay] = useState(someProducts);
	const [showMoreButton, setShowMoreButton] = useState(true);

	const handleShowMore = () => {
		if (window.innerWidth >= 1024) {
			setProductDisplay(moreProducts);
		} else {
			setProductDisplay(products);
		}
		setShowMoreButton(false);
	};

	useScroll();

	return (
		<>
			<Breadcrumb pageTitle="Shop" />
			<div className="container">
				{isCartSuccessModalOpen && <CartSuccess />}
				<ProductListing
					products={productDisplay}
					showMoreButton={showMoreButton}
					handleShowMore={handleShowMore}
				/>
			</div>
		</>
	);
};

export default Shop;
