import { useState } from "react";
import {
	desktopProducts,
	desktopProductsExtended,
	mobileProducts,
	mobileProductsExtended,
} from "../data";
import ProductListing from "./ProductListing";

const RelatedProducts = () => {
	const [showMoreButton, setShowMoreButton] = useState(true);
	const [productDisplay, setProductDisplay] = useState(
		window.innerWidth >= 1024 ? desktopProducts : mobileProducts
	);

	const handleShowMore = () => {
		if (window.innerWidth >= 1024) {
			setProductDisplay(desktopProductsExtended);
		} else {
			setProductDisplay(mobileProductsExtended);
		}
		setShowMoreButton(false);
	};

	return (
		<>
			<div className="mb-8 mt-14 lg:mt-20 lg:mb-12">
				<div className="w-[60px] h-2 rounded-xl bg-primary-light-200 mx-auto"></div>
			</div>
			<div className="container space-y-2 md:space-y-4">
				<div className="text-lg font-bold md:text-xl lg:text-2xl">
					RELATED PRODUCTS
				</div>
				<ProductListing
					products={productDisplay}
					showMoreButton={showMoreButton}
					handleShowMore={handleShowMore}
				/>
			</div>
		</>
	);
};

export default RelatedProducts;
