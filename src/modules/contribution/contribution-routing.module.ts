/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ContributionModule } from './contribution.module';

/* Containers */
import * as contributionContainers from './containers';

/* Guards */
import * as contributionGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'post',
    },
    {
        path: 'post',
        canActivate: [],
        component: contributionContainers.PostContriComponent,
        data: {
            title: 'Post - SME Adviser',
        } as SBRouteData,
    },
    {
        path: 'query',
        canActivate: [],
        component: contributionContainers.QueryContriComponent,
        data: {
            title: 'Query - SME Adviser',
        } as SBRouteData,
    },
    {
        path: 'faq',
        canActivate: [],
        component: contributionContainers.FAQContriComponent,
        data: {
            title: 'FAQ - SME Adviser',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ContributionModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ContributionRoutingModule {}
