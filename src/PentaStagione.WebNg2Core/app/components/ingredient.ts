import { Component } from '@angular/core';

@Component({
    selector: 'ingredient',
    template: `<h1>ingredient {{name}}</h1>`
})
export class IngredientComponent { name = 'spanac'; }