/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { CategoryModule } from './category.module';

/* Containers */
import * as categoryContainers from './containers';

/* Guards */
import * as categoryGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tech',
    },
    {
        path: 'tech',
        canActivate: [categoryGuards.CategoryGuard],
        component: categoryContainers.TechCatComponent,
        data: {
            title: 'Technical Category',
        } as SBRouteData,
    },
    {
        path: 'domain',
        canActivate: [categoryGuards.CategoryGuard],
        component: categoryContainers.DomainCatComponent,
        data: {
            title: 'Domain Category',
        } as SBRouteData,
    },
    {
        path: 'others',
        canActivate: [categoryGuards.CategoryGuard],
        component: categoryContainers.OthersCatComponent,
        data: {
            title: 'Others Category',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [CategoryModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class CategoryRoutingModule {}
