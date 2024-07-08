import { createPortal } from "react-dom";
import Breadcrumb from "../components/Breadcrumb";
import CartSuccess from "../components/modals/CartSuccess";
import ProductCard from "../components/ProductCard";
import products from "../data";
import { useContext, useEffect } from "react";
import { CartModalContext } from "../contexts/cart-modal-context";

const modalElement = document.getElementById("modal");
const Shop = () => {
	const { isCartSuccessModalOpen } = useContext(CartModalContext);

	useEffect(() => {
		if (isCartSuccessModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isCartSuccessModalOpen]);

	// rest of the code...;

	return (
		<>
			<Breadcrumb pageTitle="Shop" />
			{modalElement &&
				isCartSuccessModalOpen &&
				createPortal(<CartSuccess />, modalElement)}
			<section className="mb-12 space-y-16 lg:space-y-24 lg:mb-28">
				<div className="grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-3 md:gap-y-10 lg:gap-x-5">
					{products.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>

				<div className="flex justify-center">
					<button className="border text-primary-dark border-primary-dark rounded-[10px] w-fit py-[10px] px-4 font-bold xl:text-lg">
						View more
					</button>
				</div>
			</section>
		</>
	);
};

export default Shop;
