import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Query } from '@modules/addnewquery/models/query.model';
import { reply } from '@modules/contribution/models/reply.model';
import { ContributionService } from '@modules/contribution/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-detailquery',
    templateUrl: './detailquery.component.html',
    styleUrls: ['./detailquery.component.scss'],
})
export class DetailqueryComponent implements OnInit {
    htmlContent = '';
    public config: AngularEditorConfig = {
        editable: true,
        spellcheck: true,
        height: '5rem',
        minHeight: '15rem',
        placeholder: '',
        translate: 'no',
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Arial',
    };

    query!: Observable<Query>;
    replies!: Observable<reply[]>;
    _queryDescription!: Observable<string | undefined>;
    constructor(private contributionService: ContributionService, private route: ActivatedRoute) {}
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.query = this.contributionService.getQuery(params.docid as string);
            this.replies = this.contributionService.getReplies(params.docid as string);
        });
    }
}
