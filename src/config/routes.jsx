// import React from 'react';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';
// const publicRoutes = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/:category/search/:keyword" component={Catalog} />
//                 <Route path="/:category/:id" component={Detail} />
//                 <Route path="/:category" component={Catalog} />
//                 <Route path="/" exact component={Home} />
//             </Routes>
//         </BrowserRouter>
//     );
// };
const routes = {
    home: '/',
    catalog: '/:category',
    detail: '/:category/:id',
    catalog_search: '/:category/search/:keyword',
};
const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.catalog, component: Catalog },
    { path: routes.detail, component: Detail },
    { path: routes.catalog_search, component: Catalog },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
