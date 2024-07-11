import product from "../assets/products/product_1.jpg";
import deleteIcon from "../assets/icons/delete.svg";

const CheckoutCartItem = () => {
	return (
		<div className="flex flex-col gap-3 px-6 border-b border-gray-300 pb-7 lg:flex-row ">
			<div className="relative pl-8">
				<div className="absolute p-1 -translate-y-1/2 -left-2 top-1/2 xl:-left-3">
					<img src={deleteIcon} alt="" className="" />
				</div>
				<img
					src={product}
					alt=""
					className="object-cover w-full max-w-[80px] h-[80px] rounded-[10px] sm:h-[100px] sm:max-w-[100px] lg:h-[122px] lg:min-w-[122px]"
				/>
			</div>
			<div className="flex items-center justify-between lg:justify-between lg:flex-1">
				<div className="flex flex-col self-start gap-2 text-lg lg:text-xl lg:justify-between lg:h-full lg:gap-0">
					<div className="font-medium">Rosewater Face Mist </div>
					<div className="text-sm text-gray-400">
						Large size/ 500ml bottle
					</div>
					<div className="flex gap-1">
						<span className="lg:hidden">Qty:</span>
						<span className="hidden lg:block">Quantity:</span>{" "}
						<span>1</span>
					</div>
				</div>
				<div className="text-lg font-medium">NGN 5000.00</div>
			</div>
		</div>
	);
};

export default CheckoutCartItem;
