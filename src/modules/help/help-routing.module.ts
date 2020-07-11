/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { HelpModule } from './help.module';

/* Containers */
import * as helpmeContainers from './containers';

/* Guards */
import * as helpGuards from './guards';

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [helpGuards.HelpGuard],
        component: helpmeContainers.HelpMeComponent,
        data: {
            title: 'Help - SME Adviser',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'help',
                    link: '/help',
                },
                {
                    text: 'help',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [HelpModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class HelpRoutingModule {}
