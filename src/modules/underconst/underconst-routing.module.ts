/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { UnderConstModule } from './underconst.module';

/* Containers */
import * as underconstructionContainers from './containers';

/* Guards */

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: underconstructionContainers.UnderConstructionComponent,
        data: {
            title: 'Under Construction',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'underconst',
                    link: '/underconst',
                },
                {
                    text: 'underconst',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [UnderConstModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UnderConstRoutingModule {}
