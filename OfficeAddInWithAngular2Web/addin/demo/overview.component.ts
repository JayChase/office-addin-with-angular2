import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'overview.component.html',
    styleUrls: ['overview.component.css'],
    directives:[
        ROUTER_DIRECTIVES
    ]
})

export class OverviewComponent {
    title: string = "Overview";
    description: string = 'This is a sample Excel add-in made with Angular 2 and Office UI Fabric. Click the link to see how to interact with the workbook.';

    details: Object[] = [
        {
            route: '/office',
            title: 'OfficeJS integration'
        }
    ];

}