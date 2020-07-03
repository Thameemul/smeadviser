import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Query } from '../../../addnewquery/models/query.model';
import { QueryService } from '../../../addnewquery/services/query.service';

@Component({
    selector: 'sb-query',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './query.component.html',
    styleUrls: ['query.component.scss'],
})
export class QueryComponent implements OnInit {
    queries!: Observable<Query[]>;

    constructor(private queryService: QueryService) {}

    ngOnInit() {
        this.queries = this.queryService.getQueries();
    }
}
