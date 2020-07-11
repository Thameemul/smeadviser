import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { AuthService } from '@modules/auth/services';
import { angularEditorConfig } from '@modules/contribution/configuration/config';
import { Query } from '@modules/contribution/models/query.model';
import { Reply } from '@modules/contribution/models/reply.model';
import { ContributionService } from '@modules/contribution/services';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'sb-detailquery',
    templateUrl: './detailquery.component.html',
    styleUrls: ['./detailquery.component.scss'],
})
export class DetailqueryComponent implements OnInit {
    config: AngularEditorConfig = angularEditorConfig;

    htmlContent = '';
    @ViewChild('replyEditor', { static: true }) editor!: AngularEditorComponent;
    query!: Observable<Query>;
    replies!: Observable<Reply[]>;
    _queryDescription!: Observable<string | undefined>;
    queryId = '';
    isLoading: Subject<boolean> = new Subject<boolean>();

    constructor(
        private contributionService: ContributionService,
        private route: ActivatedRoute,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.showProgressBar(false);
        this.route.params.subscribe(params => {
            this.queryId = params.docid as string;
            this.query = this.contributionService.getQuery(params.docid as string);
            this.replies = this.contributionService.getReplies(params.docid as string);
        });
    }

    addNewReply() {
        // this.editor.html = '<b>testing html value</b>';
        this.showProgressBar(true);
        const user = this.authService.getUser();
        const reply: Reply = {
            createdBy: user?.uid,
            desc: this.htmlContent,
            createdDate: new Date(),
        };
        this.contributionService
            .addNewReply(this.queryId, reply)
            .then(() => {
                this.htmlContent = '';
                this.replies = this.contributionService.getReplies(this.queryId as string);
                this.showProgressBar(false);
            })
            .catch(err => {
                this.showProgressBar(false);
                console.log(err);
                alert('Adding response failed.');
            });
    }

    showProgressBar(show: boolean) {
        this.isLoading.next(show);
    }
}
