import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const ClientPage = lazy(async () => {
    return await import('@/app/clients/index');
})

import App from '@/app/App';

export const Router = createBrowserRouter([
    {
        path: '/*',
        element: <App />,
        errorElement: <>Error</>,
        children: [
            {
                path: '*',
                element: <ClientPage />
            }
        ],
    },
]);
