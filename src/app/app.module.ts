// angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// own modules
import {AuthenticationModule} from './modules/authentication/authentication.module';
import {GeneralModule} from "./modules/general/general.module";
import {MaterialModule} from './modules/general/material.module';
import {RecipesModule} from './modules/recipes/recipes.module';
// firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
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
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
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
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
