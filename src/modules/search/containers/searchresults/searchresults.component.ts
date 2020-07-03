import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-searchresults',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './searchresults.component.html',
    styleUrls: ['searchresults.component.scss'],
})
export class SearchResultsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
