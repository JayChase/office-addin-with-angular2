/// <reference path="../typings/globals/office-js/index.d.ts" />

import {bootstrap}    from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';

import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import {AppComponent} from './app.component';

//use this to run in browser for dev
// bootstrap(AppComponent, [
//     disableDeprecatedForms(),
//     provideForms(),
//     APP_ROUTER_PROVIDERS,
//     { provide: LocationStrategy, useClass: HashLocationStrategy },
//     provide(Window, { useValue: window })
// ])
//     .catch(err => console.error(err));

//bootstrap with Office.js for in Office
Office.initialize = () => {
    console.log("Office init: bootstrapping Angular2");
    bootstrap(AppComponent, [
        disableDeprecatedForms(),
        provideForms(),
        APP_ROUTER_PROVIDERS,
        { provide: LocationStrategy, useClass: HashLocationStrategy }        
    ]);
}