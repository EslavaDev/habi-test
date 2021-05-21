import { AddApartment } from '../components/pages/add-apartment';
import { Favorites } from '../components/pages/favorites';
import { Home } from '../components/pages/home';

export const routesList = [
  {
    exact: true,
    strict: true,
    title: 'Home',
    component: Home,
    path: '/',
  },
  {
    strict: true,
    title: 'Favorites',
    component: Favorites,
    path: '/favorites',
  },
  {
    strict: true,
    title: 'AddApartment',
    component: AddApartment,
    path: '/add-apartment',
  },
];
