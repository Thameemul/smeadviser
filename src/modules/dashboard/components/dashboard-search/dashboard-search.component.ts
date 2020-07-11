import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Breadcrumb } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'sb-dashboard-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-search.component.html',
    styleUrls: ['dashboard-search.component.scss'],
})
export class DashboardSearchComponent implements OnInit, OnDestroy {
    subscription: Subscription = new Subscription();
    breadcrumbs!: Breadcrumb[];

    constructor(public navigationService: NavigationService) {}
    ngOnInit() {
        this.subscription.add(
            this.navigationService.routeData$().subscribe(routeData => {
                this.breadcrumbs = routeData.breadcrumbs;
            })
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
