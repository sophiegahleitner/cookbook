import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { RecipesModule } from "./modules/recipes/recipes.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatIconModule } from "@angular/material";
import { MatMenuModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      AppRoutingModule,
      AuthenticationModule,
      BrowserAnimationsModule,
      BrowserModule,
      MatIconModule,
      MatMenuModule,
      RecipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
