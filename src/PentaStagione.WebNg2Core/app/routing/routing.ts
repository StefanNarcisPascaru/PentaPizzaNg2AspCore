import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientComponent } from '../components/ingredient';
import {PizzaComponent} from "../components/pizza/pizza";

const appRoutes: Routes = [
    {
        path: 'ingredient',
        component: IngredientComponent
    },
    {
        path: 'pizza',
        component: PizzaComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
