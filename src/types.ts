import { ReactNode } from "react";

export interface ProductCardProps {
	id: number;
	product_image: string;
	product_name: string;
	product_price: string;
}

export interface ProductListingProps {
	products: ProductCardProps[];
	showMoreButton: boolean;
	handleShowMore: () => void;
}

export interface BreadcrumbProps {
	pageTitle: string;
	showBreadcrumb?: string;
}

export interface CartModalContextProps {
	isCartSuccessModalOpen: boolean;
	openCartSuccessModal: () => void;
	closeCartSuccessModal: () => void;
}

export interface InputFieldProps {
	title: string;
	placeholder: string;
	type: string | "text";
}

export interface RadioInputFieldProps {
	title: string;
	checked: boolean;
	children?: ReactNode;
}
