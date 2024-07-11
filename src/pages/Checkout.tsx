import BillingDetails from "../components/BillingDetails";
import Breadcrumb from "../components/Breadcrumb";
import OrderSummary from "../components/OrderSummary";
import RadioInputField from "../components/RadioInputField";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import InputField from "../components/InputField";

const Checkout = () => {
	return (
		<>
			<Breadcrumb pageTitle="Checkout" showBreadcrumb="back" />
			<section className="container lg:pt-8 mb-14 sm:mb-24">
				<form className="grid grid-cols-1 gap-9 max-w-[736px] mx-auto xl:max-w-none xl:grid-cols-2 xl:gap-y-12">
					<BillingDetails />
					<OrderSummary />
					<div className="space-y-9 xl:space-y-12">
						<div className="space-y-4 lg:space-y-6">
							<div className="text-lg font-semibold lg:text-[1.75rem]">
								Delivery Options
							</div>
							<div className="space-y-3">
								<RadioInputField title="Delivery" checked />
								<RadioInputField
									title="Pick up"
									checked={false}
								/>
							</div>
						</div>
						<div>
							<div className="space-y-4 lg:space-y-6">
								<div className="text-lg font-semibold lg:text-[1.75rem]">
									Payment Options
								</div>
								<div className="pb-6 bg-gray-100 rounded-b-[10px]">
									<div className="space-y-4">
										<RadioInputField
											title="Credit card Payment"
											checked
										>
											<div className="flex items-center gap-4 pr-1 ml-auto md:gap-5 md:pr-4 xl:pr-8">
												<div>
													<img
														src={visa}
														alt=""
														className="md:w-7"
													/>
												</div>
												<div>
													<img
														src={mastercard}
														alt=""
														className="md:w-7"
													/>
												</div>
											</div>
										</RadioInputField>
										<form className="px-3 space-y-4">
											<InputField
												title="Name on card"
												placeholder="Zuliat Amuda"
												type="text"
											/>
											<InputField
												title="Card number"
												placeholder="0000 0000 0000"
												type="text"
											/>
											<div className="flex gap-6">
												<InputField
													title="Expiry Date"
													placeholder="MM / YY"
													type="text"
												/>
												<InputField
													title="Security Code"
													placeholder="000"
													type="text"
												/>
											</div>
										</form>
									</div>
								</div>
								<div className="space-y-3">
									<RadioInputField
										title="Bank Transfer"
										checked={false}
									/>
									<RadioInputField
										title="Mobile money"
										checked={false}
									/>
								</div>
							</div>
							<button className="rounded-[10px] font-bold mt-6 bg-primary text-white px-4 py-[10px] w-full block cursor-pointer lg:text-lg xl:text-2xl xl:mt-12">
								Pay Now
							</button>
						</div>
					</div>
				</form>
			</section>
		</>
	);
};

export default Checkout;
