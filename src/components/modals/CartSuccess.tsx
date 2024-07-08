import closeButton from "../../assets/icons/close.svg";
import clap from "../../assets/icons/clap.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartModalContext } from "../../contexts/cart-modal-context";

const CartSuccess = () => {
	const { closeCartSuccessModal } = useContext(CartModalContext);

	return (
		<>
			<div
				className="fixed inset-0 z-40 w-screen h-screen px-4 bg-black/20"
				onClick={closeCartSuccessModal}
			>
				<div className="absolute right-0 z-50 w-full -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-secondary left-1/2 top-1/2 flex flex-col text-center items-center pt-6 px-4 pb-8 gap-4 transition-all max-w-[316px] lg:max-w-[600px] lg:px-10 lg:pt-8 lg:pb-16">
					<button
						className="self-end w-8 lg:w-10"
						onClick={closeCartSuccessModal}
					>
						<img src={closeButton} alt="" />
					</button>
					<div className="space-y-5 lg:w-full lg:max-w-[500px] lg:space-y-10">
						<div className="space-y-3 lg:space-y-7">
							<div className="flex justify-center w-10 mx-auto lg:w-20">
								<img src={clap} alt="" />
							</div>
							<div className="lg:space-y-1">
								<div className="text-xl font-bold lg:text-2xl">
									Successful
								</div>
								<p className="max-w-[260px] text-base lg:max-w-none lg:text-xl">
									Your item has been successful added to cart
								</p>
							</div>
						</div>
						<div className="font-bold space-y-2 lg:space-y-4">
							<Link
								to="/cart"
								className="rounded-[10px] border border-primary-dark px-4 py-[10px] text-primary-dark w-full block cursor-pointer "
							>
								View cart
							</Link>
							<button
								onClick={closeCartSuccessModal}
								className="rounded-[10px] bg-primary text-white px-4 py-[10px] w-full block cursor-pointer lg:text-lg"
							>
								Continue shopping
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartSuccess;
