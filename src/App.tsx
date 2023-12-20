import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes, RouteWithSubRoutes } from './routes';
import HeaderModule from "./modules/HeaderModule/HeaderModule";

function App() {
  return (
      <Router>
          <div className="app">
              <HeaderModule />
              <Routes>
                  {routes.map((route, index) => (
                      <Route
                          key={index}
                          path={route.path}
                          element={<RouteWithSubRoutes {...route} />}
                      />
                  ))}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
