import { RadioInputFieldProps } from "../types";
import radioChecked from "../assets/icons/radio-checked.svg";

const RadioInputField = ({
	title,
	checked,
	children,
}: RadioInputFieldProps) => {
	return (
		<div
			className={`flex gap-6 items-center p-4 text-lg border border-gray-400 rounded-[4px] ${
				checked ? "bg-secondary text-black" : "bg-white text-gray-400"
			}`}
		>
			{checked ? (
				<div>
					<img src={radioChecked} alt="" />
				</div>
			) : (
				<div>
					<img src={radioChecked} alt="" />
				</div>
			)}
			<div>{title}</div>
			{children}
		</div>
	);
};

export default RadioInputField;
