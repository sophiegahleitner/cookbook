// angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// own modules
import {AuthenticationModule} from './modules/authentication/authentication.module';
import {GeneralModule} from "./modules/general/general.module";
import {MaterialModule} from './modules/general/material.module';
import {RecipesModule} from './modules/recipes/recipes.module';

import {AuthService} from "./shared/services/auth.service";
import {ForgotPasswordComponent} from './modules/authentication/components/forgot-password/forgot-password.component';
// firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from "@angular/fire/auth";
// app
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// store
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {RecipesState} from "./modules/recipes/store/recipes.state";

@NgModule({
    declarations: [
        AppComponent,
        ForgotPasswordComponent,

    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AppRoutingModule,
        AuthenticationModule,
        BrowserAnimationsModule,
        BrowserModule,
        GeneralModule,
        MaterialModule,
        NgxsModule.forRoot([RecipesState], {
            developmentMode: !environment.production,
        }),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        RecipesModule,
    ],
    providers: [
        AuthService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}

