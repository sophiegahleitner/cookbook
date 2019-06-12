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

    //categories: Array<any> = ['Hauptspeise', 'Nachspeise', 'Frühstück', 'Backen', 'Vegetarisch', 'Vegan'];

    constructor(private store: Store,) {}

    ngOnInit() {
        this.store.dispatch(new GetRecipes());
        console.log(this.recipes$);
    }

    trackByFn(recipe: RecipeModel) {
        return recipe.id;
    }
}
