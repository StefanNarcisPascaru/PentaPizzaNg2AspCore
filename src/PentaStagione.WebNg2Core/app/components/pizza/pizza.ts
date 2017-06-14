import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../models/pizza";
import {Ingredient} from "../../models/Ingredient";

@Component({
    selector: 'pizza',
    templateUrl: '/app/components/pizza/createPizza.html'
})
export class PizzaComponent implements OnInit
{
    ngOnInit()
    {
        
    }
    ingredients: Ingredient[] =
    [
        new Ingredient("1", "Salt"),
        new Ingredient("2", "Peeper"),
        new Ingredient("3", "Oregano"),
        new Ingredient("4", "Cheese"),
        new Ingredient("5", "Bacon")
    ];
    pizza:Pizza= new Pizza("1000","new pizza", this.ingredients);
} 