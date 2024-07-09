import CartListing from "./CartListing";
import CartCheckout from "./CartCheckout";

const MobileCartContent = () => {
	return (
		<div className="container lg:hidden">
			<div className="max-w-[588px] mx-auto lg:max-w-none">
				<CartListing />
				<CartCheckout />
			</div>
		</div>
	);
};

export default MobileCartContent;
