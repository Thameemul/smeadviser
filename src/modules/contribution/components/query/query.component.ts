import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { userquery } from '@modules/contribution/models/query.model';
import { reply } from '@modules/contribution/models/reply.model';
import { ContributionService } from '@modules/contribution/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-query',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './query.component.html',
    styleUrls: ['query.component.scss'],
})
export class QueryComponent implements OnInit {
    queries!: Observable<userquery[]>;

    constructor(private contributionService: ContributionService) {}

    ngOnInit() {
        this.queries = this.contributionService.getQueries();
    }
}
