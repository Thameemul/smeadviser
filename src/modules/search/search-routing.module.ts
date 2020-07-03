/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { SearchModule } from './search.module';

/* Containers */
import * as searchContainers from './containers';

/* Guards */

import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: searchContainers.SearchResultsComponent,
        data: {
            title: 'Search Results',
            breadcrumbs: [
                {
                    icon: 'book-open',
                    text: 'search',
                    link: '/search',
                },
                {
                    text: 'search',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [SearchModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SearchRoutingModule {}
