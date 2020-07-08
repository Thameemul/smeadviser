/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as categoryComponents from './components';

/* Containers */
import * as categoryContainers from './containers';

/* Guards */
import * as categoryGuards from './guards';

/* Services */
import * as categoryServices from './services';
import { PostService } from '../addnewpost/services/post.service';
import { QueryService } from '../addnewquery/services/query.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...categoryServices.services, ...categoryGuards.guards, PostService, QueryService],
    declarations: [...categoryContainers.containers, ...categoryComponents.components],
    exports: [...categoryContainers.containers, ...categoryComponents.components],
})
export class CategoryModule {}
