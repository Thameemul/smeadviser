import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-faq',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './faq.component.html',
    styleUrls: ['faq.component.scss'],
})
export class FAQComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
