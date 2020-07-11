/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SettingsModule } from './settings.module';

/* Containers */
import * as settingContainers from './containers';

/* Guards */
import * as settingsGuards from './guards';


import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [settingsGuards.SettingsGuard],
        component: settingContainers.SettingComponent,
        data: {
            title: 'Setttings - SME Adviser',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'settings',
                    link: '/setting',
                },
                {
                    text: 'settings',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [SettingsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
