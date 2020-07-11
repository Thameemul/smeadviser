/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { AddNewPostModule } from './addnewpost.module';

/* Containers */
import * as addnewpostContainers from './containers';

/* Guards */
import * as addnewpostGuards from './guards';

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [addnewpostGuards.AddNewPostGuard],
        component: addnewpostContainers.NewPostComponent,
        data: {
            title: 'Add new Post',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'addnewpost',
                    link: '/addnewpost',
                },
                {
                    text: 'addnewpost',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [AddNewPostModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AddNewPostRoutingModule {}
