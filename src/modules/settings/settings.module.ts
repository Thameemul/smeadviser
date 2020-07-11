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
import * as settingsComponents from './components';

/* Containers */
import * as settingsContainers from './containers';

/* Directives */
// import * as searchDirectives from './directives';

/* Guards */
import * as settingsGuards from './guards';

/* Services */
import * as SettingsService from './services';

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
    providers: [DecimalPipe, ...SettingsService.services, ...settingsGuards.guards],
    declarations: [
        ...settingsContainers.containers,
        ...settingsComponents.components,
        // ...searchDirectives.directives,
    ],
    exports: [...settingsContainers.containers, ...settingsComponents.components],
})
export class SettingsModule {}
