import {Component, OnInit, Input} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import { OFFICE_UI_DIRECTIVES } from './office-ui/index';

@Component({
    moduleId: module.id,
    selector: 'addin',
    templateUrl: 'app.component.html',
    providers: [
        HTTP_PROVIDERS
    ],
    directives: [
        ROUTER_DIRECTIVES,
        OFFICE_UI_DIRECTIVES
    ]
})

export class AppComponent implements OnInit {
    title: string = 'Angular 2 Excel Add-in';

    constructor( private router: Router) {

    }

    ngOnInit() {
        //need to force navigation to initial view as the url has a hash already and Office.js nulls out location.history functions
        this.router.navigate(['/overview']);
    }
}
