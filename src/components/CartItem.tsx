import deleteIcon from "../assets/icons/delete.svg";
import product from "../assets/products/product_1.jpg";

const CartItem = () => {
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
		</div>
	);
};

export default CartItem;
