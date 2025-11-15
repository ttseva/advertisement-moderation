import { createBrowserRouter } from 'react-router-dom';

import ItemPage from '../../pages/ItemPage/ItemPage';
import ListPage from '../../pages/ListPage/ListPage';
import StatsPage from '../../pages/StatsPage/StatsPage';

export const router = createBrowserRouter([
    {
        path: '/list',
        element: <ListPage />
    },
    {
        path: '/item/:id',
        element: <ItemPage />
    },
    {
        path: '/stats',
        element: <StatsPage />
    },
    {
        path: '/',
        element: <ListPage />
    }
]);
