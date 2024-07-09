import { Link } from "react-router-dom";

const CartCheckout = () => {
	return (
		<div className="pb-8 border-b border-gray-300 space-y-9">
			<div className="space-y-5">
				<div className="flex justify-around">
					<div>Subtotal</div>
					<div className="font-light">NGN5,000.00</div>
				</div>
				<div className="text-xs font-light text-right">
					Taxes and shipping calculated at checkout
				</div>
			</div>
			<div className="space-y-4 font-bold text-center">
				<Link
					to="/checkout"
					className="rounded-[10px] bg-primary text-white px-4 py-[10px] w-full block cursor-pointer lg:text-lg"
				>
					Buy now
				</Link>
				<Link
					to="/"
					className="rounded-[10px] border border-primary-dark px-4 py-[10px] text-primary-dark w-full block cursor-pointer "
				>
					Continue Shopping
				</Link>
			</div>
		</div>
	);
};

export default CartCheckout;
