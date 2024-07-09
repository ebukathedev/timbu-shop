import BillingDetails from "../components/BillingDetails";
import Breadcrumb from "../components/Breadcrumb";
import OrderSummary from "../components/OrderSummary";
import RadioInputField from "../components/RadioInputField";

const Checkout = () => {
	return (
		<>
			<Breadcrumb pageTitle="Checkout" showBreadcrumb="back" />
			<section className="container lg:pt-8 ">
				<form className="grid grid-cols-1 gap-9">
					<BillingDetails />
					<OrderSummary />
					<div>
						<div className="space-y-4">
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
					</div>
				</form>
			</section>
		</>
	);
};

export default Checkout;
