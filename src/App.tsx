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
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Shop />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="*" element={<NotFound />} />
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
