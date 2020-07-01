/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';

/* Components */
import * as viewprofileComponents from './components';

/* Containers */
import * as viewprofileContainers from './containers';

/* Directives */
import * as viewprofileDirectives from './directives';

/* Guards */
import * as viewprofileGuards from './guards';

/* Services */
import * as viewprofileServices from './services';
import { NavigationModule } from '@modules/navigation/navigation.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [
        DecimalPipe,
        ...viewprofileServices.services,
        ...viewprofileGuards.guards,
        ...viewprofileDirectives.directives,
    ],
    declarations: [
        ...viewprofileContainers.containers,
        ...viewprofileComponents.components,
        ...viewprofileDirectives.directives,
    ],
    exports: [...viewprofileContainers.containers, ...viewprofileComponents.components],
})
export class ViewProfileModule {}
