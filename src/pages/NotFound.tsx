import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
			<div className="max-w-md mx-auto text-center">
				<div className="w-12 h-12 mx-auto text-primary" />
				<h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
					404
				</h1>
				<p className="mt-4 text-muted-foreground">
					Oops, the page you were looking for doesn't exist.
				</p>
				<div className="mt-6">
					<Link
						to="/"
						className="rounded-[10px] bg-primary text-white px-4 py-[10px] w-full block cursor-pointer lg:text-lg"
					>
						Go to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
