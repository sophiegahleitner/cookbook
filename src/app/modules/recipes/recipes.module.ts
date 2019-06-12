import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from "./components/recipe-edit/recipe-edit.component";
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeListItemComponent} from './components/recipe-list-item/recipe-list-item.component';
import {RecipeService} from './services/recipe.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../general/material.module';

import {AppRoutingModule} from '../../app-routing.module';


@NgModule({
    declarations: [
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeListComponent,
        RecipeListItemComponent,
    ],
    imports: [
        AppRoutingModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        RecipeService,
    ]
})

export class RecipesModule {
}
