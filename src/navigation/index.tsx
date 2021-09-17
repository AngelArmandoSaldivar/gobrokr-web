import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Routes } from './routes';

//Types
import { RouteType } from './types';

function Navigation() {  

  return (
    <Switch>
      {Routes.map((route: RouteType, index: number) => {
        return (
          <Route path={route.path} key={index} exact>
            {route.component}
          </Route>
        );
      })}
    </Switch>
  );
}

export default Navigation;
