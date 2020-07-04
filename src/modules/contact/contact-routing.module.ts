/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ContactModule } from './contact.module';

/* Containers */
import * as contactusContainers from './containers';

/* Guards */

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: contactusContainers.ContactUsComponent,
        data: {
            title: 'Contact - SME Adviser',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'contact',
                    link: '/contact',
                },
                {
                    text: 'contact',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ContactModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
