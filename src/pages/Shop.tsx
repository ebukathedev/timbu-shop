import ProductCard from "../components/ProductCard";
import products from "../data";

const Shop = () => {
	return (
		<section className="grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-3 lg:gap-x-5">
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}

			<button className="border text-primary-dark border-primary-dark rounded-[10px] w-fit py-[10px] px-4 font-bold text-lg">
				View more
			</button>
		</section>
	);
};

export default Shop;
