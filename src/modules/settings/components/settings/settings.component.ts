import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'sb-settings',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './settings.component.html',
    styleUrls: ['settings.component.scss'],
})
export class SettingsComponent implements OnInit {


    constructor() {}
    public createCustomer(){}
    ngOnInit() {}
}
