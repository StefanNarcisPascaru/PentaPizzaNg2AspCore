import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li> <a routerLink="/ingredient">ingredient</a></li>
            <li> <a routerLink="/pizza">pizza</a></li>
        </ul>
        <router-outlet></router-outlet>`
})
export class AppComponent { }