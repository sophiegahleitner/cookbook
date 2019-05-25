import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipedetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { RecipelistComponent } from "./components/recipe-list/recipe-list.component";
import { RecipeListItemComponent } from "./components/recipe-list-item/recipe-list-item.component";
import { SearchComponent } from "./components/search/search.component";
import { RecipeCreateComponent } from './components/recipe-create/recipe-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material';
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
    declarations: [
        RecipedetailComponent,
        RecipelistComponent,
        RecipeListItemComponent,
        SearchComponent,
        RecipeCreateComponent,
    ],
    imports: [
        AppRoutingModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})

export class RecipesModule { }
