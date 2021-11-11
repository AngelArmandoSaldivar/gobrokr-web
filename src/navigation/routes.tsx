import React from 'react';
import { Home, Rent, Contact, Property, Populars, Brokr, HomeProperty, Favorites, Community} from '../screens';

  

export const Routes = [
  { path: '/', component: <Home /> },
  {path: '/populars', component: <Populars/>},
  { path: '/rent', component: <Rent /> },
  { path: '/contact', component: <Contact /> },
  { path: '/property/:id', component: <Property /> },
  { path: '/brokr/', component: <Brokr /> },
  { path: '/favorites/', component: <Favorites /> },
  { path: '/community/', component: <Community /> },
  { path: '/homeproperty/:name', component: <HomeProperty /> }
];
export const RoutesHome = [
  {path: '/populars', component: <Populars/>}
];
