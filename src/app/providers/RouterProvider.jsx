import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { Loading } from '@/shared/ui';
import { routesConfig } from '../routing';

const router = createBrowserRouter(routesConfig);

export const RouterProvider = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ReactRouterProvider router={router} />
        </Suspense>
    );
};

