import React from 'react';
import { Home, Rent, Contact, Property, Populars } from '../screens';

  

export const Routes = [
  { path: '/', component: <Home /> },
  {path: '/populars', component: <Populars/>},
  { path: '/rent', component: <Rent /> },
  { path: '/contact', component: <Contact /> },
  { path: '/property/:id', component: <Property /> }  
];
export const RoutesHome = [
  {path: '/populars', component: <Populars/>}
];
