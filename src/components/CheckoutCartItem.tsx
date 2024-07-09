import product from "../assets/products/product_1.jpg";
import deleteIcon from "../assets/icons/delete.svg";

const CheckoutCartItem = () => {
	return (
		<div className="flex flex-col gap-3 px-6 border-b border-gray-300 pb-7">
			<div className="relative pl-8">
				<div className="absolute p-1 -translate-y-1/2 -left-2 top-1/2 xl:-left-16">
					<img src={deleteIcon} alt="" className="xl:w-7" />
				</div>
				<img
					src={product}
					alt=""
					className="object-cover w-full max-w-[80px] h-[80px] rounded-[10px] sm:h-[100px] sm:w-[100px]"
				/>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-2 text-lg">
					<div className="font-medium">Rosewater Face Mist </div>
					<div className="text-sm text-gray-400">
						Large size/ 500ml bottle
					</div>
					<div>Qty: 1</div>
				</div>
				<div className="text-lg font-medium">NGN 5000.00</div>
			</div>
		</div>
	);
};

export default CheckoutCartItem;
