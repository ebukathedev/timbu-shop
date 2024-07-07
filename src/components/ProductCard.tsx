interface ProductCardProps {
	id: number;
	product_image: string;
	product_name: string;
	product_price: string;
}

const ProductCard = (props: ProductCardProps) => {
	return (
		<div className="space-y-4">
			<div>
				<img
					src={props.product_image}
					alt="product image"
					className="object-cover w-full h-[177px] rounded-[10px] min-[540px]:h-[250px] sm:h-[300px] lg:h-[402px]"
				/>
			</div>
			<div className="flex flex-col items-center text-center">
				<div className="text-2xl font-medium xl:text-3xl">
					{props.product_name}
				</div>
				<div className="mt-1 mb-3 md:text-lg xl:text-xl">
					NGN {props.product_price}
				</div>
				<button className="bg-[#3E3BF4] text-white font-bold px-4 py-[10px] rounded-[10px] xl:text-lg">
					Buy now
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
