import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {RecipeModel} from "../../models/recipe.model";
import {RecipesState} from "../../store/recipes.state";
import {Observable} from "rxjs/index";
import {GetRecipes} from "../../store/recipes.action";

@Component({
    selector: 'app-recipelist',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit {

    @Select(RecipesState.recipes) recipes$: Observable<RecipeModel[]>;

    constructor(private store: Store,) {}

    ngOnInit() {
        this.store.dispatch(new GetRecipes());
    }

    trackByFn(recipe: RecipeModel) {
        return recipe.id;
    }

}
