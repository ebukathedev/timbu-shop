import { Link } from "react-router-dom";
import leftArrow from "../assets/icons/left-arrow.svg";
interface BreadcrumbProps {
	pageTitle: string;
	showBreadcrumb?: string;
}

const Breadcrumb = ({ pageTitle, showBreadcrumb }: BreadcrumbProps) => {
	return (
		<div className="mt-10 mb-9 md:space-y-2 lg:space-y-3 md:mt-12 md:mb-14 lg:mt-14 lg:mb-16">
			<div className="text-[2rem] font-bold md:text-4xl lg:text-5xl">
				{pageTitle}
			</div>
			{showBreadcrumb === "back" ? (
				<Link
					to=".."
					className="flex items-center gap-2 text-[#010A01] md:text-xl lg:text-[1.75rem]"
				>
					<div className="w-5 md:w-auto">
						<img src={leftArrow} alt="" />
					</div>
					Go Back
				</Link>
			) : (
				<div className="text-[#010A01] md:text-xl lg:text-[1.75rem]">
					Home / {pageTitle}
				</div>
			)}
		</div>
	);
};

export default Breadcrumb;
