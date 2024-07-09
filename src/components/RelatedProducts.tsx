import products from "../data";
import ProductListing from "./ProductListing";

const RelatedProducts = () => {
	return (
		<>
			<div className="mb-8 mt-14">
				<div className="w-[60px] h-2 rounded-xl bg-primary-light-200 mx-auto"></div>
			</div>
			<div className="container space-y-2 md:space-y-4">
				<div className="text-lg font-bold md:text-xl lg:text-2xl">
					RELATED PRODUCTS
				</div>
				<ProductListing products={products} />
			</div>
		</>
	);
};

export default RelatedProducts;
