/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NavigationModule } from '@modules/navigation/navigation.module';

//  Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';

/* Components */
import * as addnewqueryComponents from './components';

/* Containers */
import * as addnewqueryContainers from './containers';

/* Directives */
import * as addnewqueryDirectives from './directives';

/* Guards */
import * as addnewqueryGuards from './guards';

/* Services */
import * as addnewqueryServices from './services';
import { environment } from '../../environments/environment';
import * as authServices from '@modules/auth/services';
import { UserSkillService } from '../auth/services/userskill.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        AngularEditorModule,
        NavigationModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule, // firestore
        AngularFireAuthModule, // auth
        AngularFireStorageModule, // storage
        FormsModule,
    ],
    providers: [
        DecimalPipe,
        ...addnewqueryServices.services,
        ...authServices.services,
        UserSkillService,
        ...addnewqueryGuards.guards,
        ...addnewqueryDirectives.directives,


    ],
    declarations: [
        ...addnewqueryContainers.containers,
        ...addnewqueryComponents.components,
        ...addnewqueryDirectives.directives,
    ],
    exports: [...addnewqueryContainers.containers, ...addnewqueryComponents.components],
})
export class AddNewQueryModule {}
