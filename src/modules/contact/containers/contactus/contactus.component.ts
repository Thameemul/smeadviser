import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-contactus',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contactus.component.html',
    styleUrls: ['contactus.component.scss'],
})
export class ContactUsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
