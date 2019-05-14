import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipedetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { RecipelistComponent } from "./components/recipe-list/recipe-list.component";
import { RecipeListItemComponent } from "./components/recipe-list-item/recipe-list-item.component";
import { SearchComponent } from "./components/search/search.component";

import { MatCardModule } from "@angular/material";

@NgModule({
  declarations: [
      RecipedetailComponent,
      RecipelistComponent,
      RecipeListItemComponent,
      SearchComponent,
  ],
  imports: [
    CommonModule,
      MatCardModule,
  ]
})
export class RecipesModule { }
