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
import * as detailqueryComponents from './components';

/* Containers */
import * as detailqueryContainers from './containers';

/* Directives */
// import * as detailqueryDirectives from './directives';

/* Guards */
import * as detailqueryGuards from './guards';

/* Services */
import * as detailqueryServices from './services';
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
        ...detailqueryServices.services,
        ...authServices.services,
        UserSkillService,
        ...detailqueryGuards.guards,
        // ...detailqueryDirectives.directives,
    ],
    declarations: [
        ...detailqueryContainers.containers,
        ...detailqueryComponents.components,
        // ...detailqueryDirectives.directives,
    ],
    exports: [...detailqueryContainers.containers, ...detailqueryComponents.components],
})
export class DetailQueryModule {}
