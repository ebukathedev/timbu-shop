import { createPortal } from "react-dom";
import Breadcrumb from "../components/Breadcrumb";
import CartSuccess from "../components/modals/CartSuccess";
import products from "../data";
import { useContext, useState } from "react";
import { CartModalContext } from "../contexts/cart-modal-context";
import ProductListing from "../components/ProductListing";
import useScroll from "../contexts/hooks/use-scroll";

const modalElement = document.getElementById("modal");

const Shop = () => {
	const someProducts = products.slice(0, 6);
	const { isCartSuccessModalOpen } = useContext(CartModalContext);
	const [productDisplay, setProductDisplay] = useState(someProducts);

	useScroll();

	return (
		<>
			<Breadcrumb pageTitle="Shop" />
			<div className="container">
				{modalElement &&
					isCartSuccessModalOpen &&
					createPortal(<CartSuccess />, modalElement)}
				<section className="mb-12 space-y-16 lg:space-y-24 lg:mb-28">
					<ProductListing products={productDisplay} />
					<div className="flex justify-center">
						<button
							onClick={() => setProductDisplay(products)}
							className="border text-primary-dark border-primary-dark rounded-[10px] w-fit py-[10px] px-4 font-bold xl:text-lg"
						>
							View more
						</button>
					</div>
				</section>
			</div>
		</>
	);
};

export default Shop;
