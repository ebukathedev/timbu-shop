import { ProductListingProps } from "../types";
import ProductCard from "./ProductCard";

const ProductListing = ({ products }: ProductListingProps) => {
	return (
		<div className="grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-3 md:gap-y-10 lg:gap-x-5">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
};

export default ProductListing;
