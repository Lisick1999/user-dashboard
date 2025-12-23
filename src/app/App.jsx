import { ErrorBoundary } from '@/widgets/error-boundary';
import { RouterProvider } from './providers';

export const App = () => {
    return (
        <ErrorBoundary>
            <RouterProvider />
        </ErrorBoundary>
    );
};
