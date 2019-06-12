import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../models/recipe.model";
import {CreateRecipe, DeleteRecipe} from "../../store/recipes.action";
import {Store} from "@ngxs/store";

@Component({
    selector: 'app-recipe-list-item',
    templateUrl: './recipe-list-item.component.html',
    styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {

    @Input() recipe: RecipeModel;

    constructor(private store: Store) {}

    ngOnInit() {}

    deleteRecipe() {
        if(confirm('Willst du das Rezept wirklich löschen?')) {
            this.store.dispatch(new DeleteRecipe(this.recipe.id));
        }
    }
}
