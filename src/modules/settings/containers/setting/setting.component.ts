import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-setting',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './setting.component.html',
    styleUrls: ['setting.component.scss'],
})
export class SettingComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
