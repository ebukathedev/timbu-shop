import deleteIcon from "../assets/icons/delete.svg";
import product from "../assets/products/product_1.jpg";
import QuantityTracker from "./QuantityTracker";

const MobileCartItem = () => {
	return (
		<div>
			<div className="flex items-center gap-6">
				<div className="p-1">
					<img src={deleteIcon} alt="" className="min-[540px]:w-8" />
				</div>
				<div>
					<img
						src={product}
						alt=""
						className="object-cover w-full min-w-[200px] h-[200px] rounded-[10px] min-[540px]:w-[250px] min-[540px]:h-[250px] sm:h-[300px] sm:w-[300px]"
					/>
				</div>
			</div>
			<div className="border-gray-300 border-y py-[20px] mt-3 mb-4 flex flex-col font-medium gap-[20px]">
				<div className="flex gap-10">
					<div>Product</div>
					<div>Rose water Face Mist - Large size/ 500ml</div>
				</div>
				<div className="flex items-center gap-10">
					<div>Quantity</div>
					<QuantityTracker />
				</div>
				<div className="flex items-center gap-10">
					<div>Total</div>
					<div>N5000</div>
				</div>
			</div>
		</div>
	);
};

export default MobileCartItem;
