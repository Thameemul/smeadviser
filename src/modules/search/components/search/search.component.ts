import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
    selector: 'sb-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './search.component.html',
    styleUrls: ['search.component.scss'],
})
export class SearchComponent implements OnInit {
    searchWord = 'credit card';
    constructor() {}

    ngOnInit() {}
}
