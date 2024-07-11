import product_1 from "./assets/products/product_1.jpg";
import product_2 from "./assets/products/product_2.jpg";
import product_3 from "./assets/products/product_3.jpg";
import product_4 from "./assets/products/product_4.jpg";
import product_5 from "./assets/products/product_5.jpg";
import product_6 from "./assets/products/product_6.jpg";
import product_7 from "./assets/products/product_7.jpg";
import product_8 from "./assets/products/product_8.jpg";
import product_9 from "./assets/products/product_9.jpg";
import product_10 from "./assets/products/product_10.jpg";

const products = [
	{
		id: 1,
		product_image: product_1,
		product_name: "Rosewater face Mist",
		product_price: "5000.00",
		product_description: "Large size/ 500ml bottle",
	},
	{
		id: 2,
		product_image: product_2,
		product_name: "Face Serum",
		product_price: "5000.00",
	},
	{
		id: 3,
		product_image: product_3,
		product_name: "Facial Skincare Set",
		product_price: "15000.00",
	},
	{
		id: 4,
		product_image: product_4,
		product_name: "Body Lotion",
		product_price: "5000.00",
	},
	{
		id: 5,
		product_image: product_5,
		product_name: "Moist Lip Balm",
		product_price: "3000.00",
	},
	{
		id: 6,
		product_image: product_6,
		product_name: "Restorative Hair Mask",
		product_price: "5000.00",
	},
	{
		id: 7,
		product_image: product_7,
		product_name: "Sunscreen",
		product_price: "5000.00",
	},
	{
		id: 8,
		product_image: product_8,
		product_name: "Night time Skincare Set",
		product_price: "10000.00",
	},
	{
		id: 9,
		product_image: product_9,
		product_name: "Daytime skincare set",
		product_price: "10000.00",
	},
	{
		id: 10,
		product_image: product_10,
		product_name: "Body Exfoliant",
		product_price: "5000.00",
	},
];

const mobileProducts = [
	...products.slice(1, 3),
	...products.slice(4, 5),
	...products.slice(3, 4),
];
const mobileProductsExtended = [
	...mobileProducts,
	...products.slice(9),
	...products.slice(7, 9),
	...products.slice(6, 7),
];

const desktopProducts = [...products.slice(1, 3), ...products.slice(4, 5)];
const desktopProductsExtended = [
	...desktopProducts,
	...products.slice(3, 4),
	...products.slice(9),
	...products.slice(7, 8),
];

const someProducts = products.slice(0, 6);
const moreProducts = [...products.slice(0, 7), ...products.slice(8)];

export default products;
export {
	mobileProducts,
	mobileProductsExtended,
	desktopProducts,
	desktopProductsExtended,
	someProducts,
	moreProducts
};
