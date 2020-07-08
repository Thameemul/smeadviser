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
import * as reportbugComponents from './components';

/* Containers */
import * as reportbugContainers from './containers';

/* Directives */
// import * as searchDirectives from './directives';

/* Guards */

/* Services */
import * as ReportBugService from './services';

import { environment } from '../../environments/environment';

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
    providers: [DecimalPipe, ...ReportBugService.services],
    declarations: [
        ...reportbugContainers.containers,
        ...reportbugComponents.components,
        // ...searchDirectives.directives,
    ],
    exports: [...reportbugContainers.containers, ...reportbugComponents.components],
})
export class ReportBugModule {}
