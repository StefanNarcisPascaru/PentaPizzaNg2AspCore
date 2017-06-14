import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { routing } from './routing/routing';
import {IngredientComponent} from "./components/ingredient";
import {PizzaComponent} from "./components/pizza/pizza";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, IngredientComponent, PizzaComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }