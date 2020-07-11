/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { ChartsModule } from './charts.module';

/* Containers */
import * as chartsContainers from './containers';

/* Guards */
import * as chartsGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [chartsGuards.ChartsGuard],
        component: chartsContainers.ChartsComponent,
        data: {
            title: 'Statistics - SME Adviser',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Statistics',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ChartsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ChartsRoutingModule {}
