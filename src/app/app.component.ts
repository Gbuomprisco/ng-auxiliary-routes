import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `        
        <router-outlet></router-outlet>
        <router-outlet name="dialog"></router-outlet>
    `
})
export class AppComponent {

}
