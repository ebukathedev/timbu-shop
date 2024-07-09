import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import { CartModalProvider } from "./contexts/cart-modal-context";
import RootLayout from "./layouts/RootLayout";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Shop />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
		</Route>
	)
);

const App = () => {
	return (
		<CartModalProvider>
			<RouterProvider router={router} />
		</CartModalProvider>
	);
};

export default App;
