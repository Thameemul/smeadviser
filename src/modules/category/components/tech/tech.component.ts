import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-tech',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tech.component.html',
    styleUrls: ['tech.component.scss'],
})
export class TechComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
