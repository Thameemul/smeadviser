/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ReportBugModule } from './reportbug.module';

/* Containers */
import * as ReportBugsContainers from './containers';

/* Guards */

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: ReportBugsContainers.ReportBugsComponent,
        data: {
            title: 'ReportBug - SME Adviser',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'ReportBug',
                    link: '/reportbug',
                },
                {
                    text: 'reportbug',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ReportBugModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ReportBugRoutingModule {}
