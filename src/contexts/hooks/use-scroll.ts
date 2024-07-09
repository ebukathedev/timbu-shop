import { useContext, useEffect } from "react";
import { CartModalContext } from "../cart-modal-context"; // Update the import path according to your project structure
const useScroll = () => {
	const { isCartSuccessModalOpen } = useContext(CartModalContext);

	useEffect(() => {
		if (isCartSuccessModalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isCartSuccessModalOpen]);
};

export default useScroll;
