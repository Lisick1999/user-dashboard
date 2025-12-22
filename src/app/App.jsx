import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { routesConfig } from '@/pages/routes.jsx';
import ErrorBoundary from '@/widgets/ErrorBoundary.jsx';

const router = createBrowserRouter(routesConfig);

export const App = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={<div className="loading-spinner">Загрузка...</div>}>
				<RouterProvider router={router} />
			</Suspense>
		</ErrorBoundary>
	);
};
