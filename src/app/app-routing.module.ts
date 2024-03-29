import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/login',
    },
    {
        path: 'charts',
        loadChildren: () =>
            import('modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('modules/dashboard/dashboard-routing.module').then(
                m => m.DashboardRoutingModule
            ),
    },
    {
        path: 'view-profile',
        loadChildren: () =>
            import('modules/view-profile/view-profile-routing.module').then(
                m => m.ViewProfileRoutingModule
            ),
    },
    {
        path: 'addnewquery',
        loadChildren: () =>
            import('@modules/addnewquery/addnewquery-routing.module').then(
                m => m.AddNewQueryRoutingModule
            ),
    },
    {
        path: 'addnewpost',
        loadChildren: () =>
            import('@modules/addnewpost/addnewpost-routing.module').then(
                m => m.AddNewPostRoutingModule
            ),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
    },
    {
        path: 'contribution',
        loadChildren: () =>
            import('@modules/contribution/contribution-routing.module').then(
                m => m.ContributionRoutingModule
            ),
    },
    {
        path: 'category',
        loadChildren: () =>
            import('@modules/category/category-routing.module').then(m => m.CategoryRoutingModule),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
    {
        path: 'tables',
        loadChildren: () =>
            import('modules/tables/tables-routing.module').then(m => m.TablesRoutingModule),
    },
    {
        path: 'version',
        loadChildren: () =>
            import('modules/utility/utility-routing.module').then(m => m.UtilityRoutingModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('modules/error/error-routing.module').then(m => m.ErrorRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
