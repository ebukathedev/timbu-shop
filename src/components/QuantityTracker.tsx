import addIcon from "../assets/icons/add.svg";
import subtractIcon from "../assets/icons/subtract.svg";

const QuantityTracker = () => {
	return (
		<div className="px-2 border border-primary-dark rounded-[10px] text-lg w-full max-w-[87px] flex justify-between items-center text-primary-dark h-fit lg:max-w-[100px] lg:px-[10px]">
			<button>
				<img src={subtractIcon} alt="" />
			</button>
			<span>2</span>
			<button>
				<img src={addIcon} alt="" />
			</button>
		</div>
	);
};

export default QuantityTracker;
