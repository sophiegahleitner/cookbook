import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../../models/recipe.model';
import {ActivatedRoute} from '@angular/router';
import {RecipesState} from "../../store/recipes.state";
import {Observable} from "rxjs/index";
import {Select, Store} from "@ngxs/store";
import {GetRecipe} from "../../store/recipes.action";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

    @Select(RecipesState.recipeDetail) recipeDetail$: Observable<RecipeModel>;

    recipe: RecipeModel = new RecipeModel();

    constructor(
        private store: Store,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.store.dispatch(new GetRecipe(id));

        this.recipeDetail$.subscribe(data => {
            this.recipe = {
                title: data.title,
                time: data.time,
                difficulty: data.difficulty,
                ingredients: data.ingredients,
                instruction: data.instruction,
            } as RecipeModel;
        });
    }
}
