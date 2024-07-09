import { InputFieldProps } from "../types";

const InputField = ({ title, placeholder, type }: InputFieldProps) => {
	return (
		<div className="space-y-[10px] w-full">
			<label>{title}</label>
			<div className="border border-gray-300 rounded-[4px] py-3 pr-[10px] pl-4">
				<input
					type={type}
					placeholder={placeholder}
					className="w-full bg-transparent focus:outline-none"
				/>
			</div>
		</div>
	);
};

export default InputField;
