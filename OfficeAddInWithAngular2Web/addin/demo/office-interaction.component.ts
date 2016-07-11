import { Component, OnInit } from '@angular/core';
import { NgForm }    from '@angular/forms';

import { OFFICE_UI_DIRECTIVES } from '../office-ui/index';

import {ExcelService, IOfficeResult } from '../office/index';

@Component({
    moduleId: module.id,
    templateUrl: 'office-interaction.component.html',
    styleUrls: ['office-interaction.component.css'],
    providers: [
        ExcelService
    ],
    directives: [
        OFFICE_UI_DIRECTIVES
    ]
})
export class OfficeInteractionComponent implements OnInit {
    title: string = "Office interaction";
    description: string = 'Office compat issues hash based routing and no history issues.';
    feedback: string = '';

    isBusy: boolean;
    userInput: string;

    constructor(private excelService: ExcelService) { }

    ngOnInit() {
        this.isBusy = true;
        this.feedback = 'binding to workbook';

        this.excelService
            .bindToWorkBook()
            .then((result: IOfficeResult) => {
                this.onResult(result);
            }, (result: IOfficeResult) => {
                this.onResult(result);
            });
    }

    submit() {
        this.isBusy = true;

        this.excelService
            .setSampleText(this.userInput)
            .then((result: IOfficeResult) => {
                this.onResult(result);
            }, (result: IOfficeResult) => {
                this.onResult(result);
            });
    }

    onResult(result: IOfficeResult): void {
        this.feedback = result.error || result.success;
        this.isBusy = false;
    }
}