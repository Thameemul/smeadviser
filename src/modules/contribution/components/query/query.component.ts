import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Query } from '@modules/addnewquery/models';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

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

    setAsFAQ(query: Query) {
        query.isFAQ = true;
        this.queryService.setFAQstatus(query);
    }
}