import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Query } from '@modules/contribution/models/Query.model';
import { Observable } from 'rxjs';

import { SearchService } from '../../services/search.service';
@Component({
    selector: 'sb-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './search.component.html',
    styleUrls: ['search.component.scss'],
})
export class SearchComponent implements OnInit {
    searchWord = 'credit card';

    constructor(private searchService: SearchService) {}

    queries!: Observable<Query[]>;

    ngOnInit() {
        this.queries = this.searchService.getSearchResults();
    }
}
