import CartCheckout from "./CartCheckout";
import MobileCartItem from "./MobileCartItem";

const MobileCartContent = () => {
	return (
		<div className="container lg:hidden">
			<div className="max-w-[588px] mx-auto lg:max-w-none">
				<div className="flex flex-col gap-10">
					<MobileCartItem />
				</div>
				<CartCheckout />
			</div>
		</div>
	);
};

export default MobileCartContent;
