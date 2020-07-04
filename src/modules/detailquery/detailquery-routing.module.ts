/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { DetailQueryModule } from './detailquery.module';

/* Containers */
import * as detailqueryContainers from './containers';

/* Guards */

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: detailqueryContainers.DetailedQueryComponent,
        data: {
            title: 'Detailed Query - SME Adviser',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'detailquery',
                    link: '/detailquery',
                },
                {
                    text: 'detailquery',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [DetailQueryModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class DetailQueryRoutingModule {}
