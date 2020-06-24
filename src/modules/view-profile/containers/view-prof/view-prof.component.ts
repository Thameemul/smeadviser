import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-view-prof',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './view-prof.component.html',
    styleUrls: ['view-prof.component.scss'],
})
export class ViewProfComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
