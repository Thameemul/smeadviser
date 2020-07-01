/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ViewProfileModule } from './view-profile.module';

/* Containers */
import * as viewprofileContainers from './containers';

/* Guards */
import * as viewprofileGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: viewprofileContainers.ViewProfComponent,
        data: {
            title: 'View Profile',
            breadcrumbs: [
                {
                    text: 'View Profile',
                    link: '/view-prof',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ViewProfileModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ViewProfileRoutingModule {}
