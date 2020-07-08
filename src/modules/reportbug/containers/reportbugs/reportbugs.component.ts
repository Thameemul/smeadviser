import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-reportbugs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './reportbugs.component.html',
    styleUrls: ['reportbugs.component.scss'],
})
export class ReportBugsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
