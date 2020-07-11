/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AddNewQueryModule } from './addnewquery.module';

/* Containers */
import * as addnewqueryContainers from './containers';

/* Guards */
import * as addnewqueryGuards from './guards';

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [addnewqueryGuards.AddNewQueryGuard],
        component: addnewqueryContainers.NewQueryComponent,
        data: {
            title: 'Add new Query',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'addnewquery',
                    link: '/addnewquery',
                },
                {
                    text: 'addnewquery',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [AddNewQueryModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AddNewQueryRoutingModule {}
