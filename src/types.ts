export interface ProductCardProps {
	id: number;
	product_image: string;
	product_name: string;
	product_price: string;
}

export interface ProductListingProps {
	products: ProductCardProps[];
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