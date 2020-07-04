import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-helpme',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './helpme.component.html',
    styleUrls: ['helpme.component.scss'],
})
export class HelpMeComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
