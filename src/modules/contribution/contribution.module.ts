/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

//  Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as contributionComponents from './components';

/* Containers */
import * as contributionContainers from './containers';

/* Guards */
import * as contributionGuards from './guards';

/* Services */
import * as contributionServices from './services';

import { PostService } from '../addnewpost/services/post.service';
import { environment } from '../../environments/environment';
import { QueryService } from '../addnewquery/services/query.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        AngularEditorModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule, // firestore
        AngularFireAuthModule, // auth
        AngularFireStorageModule, // storage
        FormsModule,
    ],
    providers: [
        ...contributionServices.services,
        PostService,
        QueryService,
        ...contributionGuards.guards,
    ],
    declarations: [...contributionContainers.containers, ...contributionComponents.components],
    exports: [...contributionContainers.containers, ...contributionComponents.components],
})
export class ContributionModule {}
