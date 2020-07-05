import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FAQ } from '@modules/contribution/models/faq.model';
import { ContributionService } from '@modules/contribution/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-faq',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './faq.component.html',
    styleUrls: ['faq.component.scss'],
})
export class FAQComponent implements OnInit {
    constructor(private contributionService: ContributionService) {}
    faqs!: Observable<FAQ[]>;
    ngOnInit() {
        this.faqs = this.contributionService.getFAQs();
    }
}7