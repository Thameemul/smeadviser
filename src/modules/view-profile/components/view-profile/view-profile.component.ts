import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'sb-view-profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './view-profile.component.html',
    styleUrls: ['view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
