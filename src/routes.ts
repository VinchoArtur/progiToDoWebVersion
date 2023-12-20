// src/routes.ts
import React from 'react';
import HomeModule from "@modules/HomeModule/HomeModule";

interface Route {
    path: string;
    element: React.ReactElement;
    routes?: Route[];
}

const routes: Route[] = [
    {
        path: '/',
        element: React.createElement(HomeModule),
    },
];

const RouteWithSubRoutes: React.FC<Route> = ({ element, routes }) => {
    return React.cloneElement(element, { routes });
};

export { routes, RouteWithSubRoutes };
