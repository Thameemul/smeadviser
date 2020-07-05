import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userquery } from '@modules/contribution/models/query.model';
import { reply } from '@modules/contribution/models/reply.model';
import { ContributionService } from '@modules/contribution/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-detailquery',
    templateUrl: './detailquery.component.html',
    styleUrls: ['./detailquery.component.scss'],
})
export class DetailqueryComponent implements OnInit {
    queries!: Observable<userquery[]>;
    replies!: Observable<reply[]>;
    q!: Observable<userquery>;
    _queryDescription!: Observable<string | undefined>;

    constructor(private contributionService: ContributionService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this._queryDescription = new Observable<string>(observer => {
                this.contributionService.getQuery(params.docid as string).subscribe(val => {
                    observer.next(val.desc);
                });
                this.replies = this.contributionService.getReplies(params.docid as string);
            });
        });
    }
}
