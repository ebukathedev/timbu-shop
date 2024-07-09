import CartCheckout from "./CartCheckout";
import DesktopCartItem from "./DesktopCartItem";

const DesktopCartContent = () => {
	return (
		<div className="hidden lg:block">
			<div className="grid justify-between grid-cols-[1.5fr_0.5fr_0.5fr] px-20 pb-5 pt-8 text-xl font-medium max-w-[1200px] mx-auto">
				<div className="">Product</div>
				<div>Quantity</div>
				<div>Total</div>
			</div>
			<div className="border-gray-300 border-y">
				<div className="grid grid-cols-[1.5fr_0.5fr_0.5fr] max-w-[1200px] px-20 py-10 mx-auto gap-10">
					<DesktopCartItem />
					<DesktopCartItem />
					<div className="cart-checkout">
						<CartCheckout />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DesktopCartContent;
