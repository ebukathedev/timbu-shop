import CheckoutCartItem from "./CheckoutCartItem";

const OrderSummary = () => {
	return (
		<div className="flex flex-col gap-4 xl:row-span-2 lg:gap-6">
			<div className="text-lg font-semibold lg:text-[1.75rem] xl:hidden">
				Your Order
			</div>
			<div className="bg-gray-100 rounded-lg xl:flex-1">
				<div className="flex justify-between px-6 py-4 font-medium xl:py-6 xl:text-xl xl:px-[56px]">
					<div>Product</div>
					<div>Total</div>
				</div>
				<div className="pt-4 pb-6 border-t border-gray-300 xl:pt-12">
					<div className="flex flex-col gap-10">
						<CheckoutCartItem />
					</div>
					<div className="px-6 py-4 border-b border-gray-300 xl:py-8">
						<div className="flex flex-col gap-3 xl:max-w-[19rem] xl:ml-auto">
							<div className="flex items-center justify-between text-lg font-medium text-gray-400">
								<div className="text-xl xl:text-lg">
									Subtotal
								</div>
								<div className="font-light">NGN5,000.00</div>
							</div>
							<div className="flex items-center justify-between xl:text-lg">
								<div>Shipping fee</div>
								<div className="font-light">NGN3,000.00</div>
							</div>
							<div className="flex items-center justify-between px-2 text-black xl:text-xl xl:px-0 xl:pt-3">
								<div>TOTAL</div>
								<div className="font-light">NGN8,000.00</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderSummary;
