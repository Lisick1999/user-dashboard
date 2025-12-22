import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { routesConfig } from '@/pages/routes.jsx';
import ErrorBoundary from '@/widgets/ErrorBoundary/ErrorBoundary.jsx';
import { Loading } from '@/shared/Loading/';

const router = createBrowserRouter(routesConfig);

export const App = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={<Loading />}>
				<RouterProvider router={router} />
			</Suspense>
		</ErrorBoundary>
	);
};
