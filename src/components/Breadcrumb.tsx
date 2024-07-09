import { useNavigate } from "react-router-dom";
import leftArrow from "../assets/icons/left-arrow.svg";
import { BreadcrumbProps } from "../types";

const Breadcrumb = ({ pageTitle, showBreadcrumb }: BreadcrumbProps) => {
	const navigate = useNavigate();

	return (
		<div className="container mt-10 mb-9 md:space-y-2 lg:space-y-3 md:mt-12 md:mb-14 lg:mt-14 lg:mb-16">
			<div className="text-[2rem] font-bold md:text-4xl lg:text-5xl">
				{pageTitle}
			</div>
			{showBreadcrumb === "back" ? (
				<button
					onClick={(e) => {
						e.preventDefault();
						navigate(-1);
					}}
					className="flex items-center gap-2 text-[#010A01] md:text-xl lg:text-[1.75rem]"
				>
					<div className="w-5 md:w-auto">
						<img src={leftArrow} alt="" />
					</div>
					Go Back
				</button>
			) : (
				<div className="text-[#010A01] md:text-xl lg:text-[1.75rem]">
					Home / {pageTitle}
				</div>
			)}
		</div>
	);
};

export default Breadcrumb;
