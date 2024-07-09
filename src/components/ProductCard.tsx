import mobileCartButton from "../assets/icons/mobile-cart-button.svg";
import desktopCartButton from "../assets/icons/desktop-cart-button.svg";
import { CartModalContext } from "../contexts/cart-modal-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../types";

const ProductCard = (props: ProductCardProps) => {
	const { openCartSuccessModal } = useContext(CartModalContext);

	return (
		<div className="space-y-4">
			<div className="relative">
				<button
					onClick={openCartSuccessModal}
					className="absolute left-3 bottom-3 lg:left-5 lg:bottom-5"
				>
					<img
						src={mobileCartButton}
						alt=""
						className="block lg:hidden"
					/>
					<img
						src={desktopCartButton}
						alt=""
						className="hidden w-10 lg:block"
					/>
				</button>
				<img
					src={props.product_image}
					alt="product image"
					className="object-cover w-full h-[177px] rounded-[10px] min-[540px]:h-[250px] sm:h-[300px] lg:h-[402px]"
				/>
			</div>
			<div className="flex flex-col items-center text-center">
				<div className="text-2xl font-medium xl:text-3xl">
					{props.product_name}
				</div>
				<div className="mt-1 mb-3 md:text-lg lg:text-xl xl:text-2xl lg:font-medium">
					NGN {props.product_price}
				</div>
				<Link
					to="/cart"
					className="bg-[#3E3BF4] text-white font-bold px-4 py-[10px] rounded-[10px] xl:text-lg"
				>
					Buy now
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
