import { createContext, ReactNode, useState } from "react";
import { CartModalContextProps } from "../types";

type CartModalProviderProps = { children: ReactNode };

export const CartModalContext = createContext<CartModalContextProps>({
	isCartSuccessModalOpen: false,
	openCartSuccessModal: () => {},
	closeCartSuccessModal: () => {},
});

export const CartModalProvider = ({ children }: CartModalProviderProps) => {
	const [isCartSuccessModalOpen, setIsCartSuccessModalOpen] = useState(false);

	const openCartSuccessModal = () => {
		setIsCartSuccessModalOpen(true);
	};

	const closeCartSuccessModal = () => {
		setIsCartSuccessModalOpen(false);
	};

	return (
		<CartModalContext.Provider
			value={{
				isCartSuccessModalOpen,
				openCartSuccessModal,
				closeCartSuccessModal,
			}}
		>
			{children}
		</CartModalContext.Provider>
	);
};
