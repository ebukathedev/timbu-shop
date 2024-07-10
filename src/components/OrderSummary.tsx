import CheckoutCartItem from "./CheckoutCartItem";

const OrderSummary = () => {
	return (
		<div className="space-y-4 xl:row-span-2">
			<div className="text-lg font-semibold lg:text-[1.75rem]">
				Your Order
			</div>
			<div className="bg-gray-100 rounded-lg xl:h-full">
				<div className="flex justify-between px-6 py-4 font-medium">
					<div>Product</div>
					<div>Total</div>
				</div>
				<div className="pt-4 pb-6 border-t border-gray-300">
					<div className="flex flex-col gap-10">
						<CheckoutCartItem />
					</div>
					<div className="px-6 py-4 space-y-3 border-b border-gray-300">
						<div className="flex items-center justify-between text-lg font-medium text-gray-400">
							<div className="text-xl">Subtotal</div>
							<div className="font-light">NGN5,000.00</div>
						</div>
						<div className="flex items-center justify-between">
							<div>Shipping fee</div>
							<div className="font-light">NGN3,000.00</div>
						</div>
						<div className="flex items-center justify-between px-2 text-black">
							<div>TOTAL</div>
							<div className="font-light">NGN8,000.00</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
