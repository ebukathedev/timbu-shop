import InputField from "./InputField";

const BillingDetails = () => {
	return (
		<div className="space-y-4">
			<div className="text-lg font-semibold lg:text-[1.75rem]">
				Billing Details
			</div>
			<form className="space-y-6">
				<div className="flex gap-5">
					<InputField
						title="First name"
						placeholder="Zuliat"
						type="text"
					/>
					<InputField
						title="Last name"
						placeholder="Amuda"
						type="text"
					/>
				</div>
				<div className="flex gap-5">
					<InputField
						title="Country"
						placeholder="Nigeria"
						type="text"
					/>
					<InputField title="State" placeholder="Kwara" type="text" />
				</div>
				<div>
					<InputField
						title="Street address"
						placeholder="No 32 Adenuga street"
						type="text"
					/>
				</div>
				<div className="flex gap-5">
					<InputField
						title="Zip code"
						placeholder="000000"
						type="text"
					/>
					<InputField
						title="Phone Number"
						placeholder="09183088843"
						type="text"
					/>
				</div>
				<div>
					<InputField
						title="Email"
						placeholder="example@gmail.com"
						type="text"
					/>
				</div>
			</form>
		</div>
	);
};

export default BillingDetails;
