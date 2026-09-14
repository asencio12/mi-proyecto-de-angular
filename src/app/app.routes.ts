import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Recipes } from './recipes/recipes';
import { RecipesList } from './recipes-list/recipes-list';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contacto', component: Contact },
  { path: 'recipes', component: Recipes },
  { path: 'recipes-list', component: RecipesList },
  { path: 'recipes-detail/:id', component: Recipes },
  { path: '**', redirectTo: 'home' }
];