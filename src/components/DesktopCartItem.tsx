import deleteIcon from "../assets/icons/delete.svg";
import product from "../assets/products/product_1.jpg";
import QuantityTracker from "./QuantityTracker";

const DesktopCartItem = () => {
	return (
		<>
			<div className="relative flex gap-8">
				<div className="absolute p-1 -translate-y-1/2 -left-12 top-1/2 xl:-left-16">
					<img src={deleteIcon} alt="" className="xl:w-7" />
				</div>
				<div>
					<img
						src={product}
						alt=""
						className="object-cover w-full min-w-[150px] h-[150px] rounded-[10px] xl:w-[200px] xl:h-[200px]"
					/>
				</div>
				<div className="space-y-2 text-lg font-medium">
					<div className="text-[22px]">Rosewater Face Mist </div>
					<div className="font-light text-gray-400">
						Large size/ 500ml bottle
					</div>
					<div>NGN 5000.00</div>
				</div>
			</div>

			<QuantityTracker />
			<div className="text-lg font-medium">NGN 5000.00</div>
		</>
	);
};

export default DesktopCartItem;
