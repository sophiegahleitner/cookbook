import {Action, Selector, State, StateContext} from '@ngxs/store';
import {RecipesStateModel} from "../models/recipesState.model";
import {RecipeModel} from "../models/recipe.model";
import {CreateRecipe, DeleteRecipe, GetRecipe, GetRecipes, UpdateRecipe} from "./recipes.action";
import {RecipeService} from '../services/recipe.service';
import {tap} from "rxjs/internal/operators";

@State<RecipesStateModel>({
    name: 'recipes',
    defaults: {
        recipes: [],
        recipeDetail: new RecipeModel(),
    }
})

export class RecipesState {

    constructor(private recipeService: RecipeService) {}

    @Selector()
    static recipes(state: RecipesStateModel): RecipeModel[] {
        return state.recipes;
    }

    @Selector()
    static recipeDetail(state: RecipesStateModel): RecipeModel {
        return state.recipeDetail;
    }

    @Action(CreateRecipe)
    createRecipe(context: StateContext<RecipesStateModel>, action: CreateRecipe) {
        const recipe = new RecipeModel();
        recipe.title = action.recipe.title;
        recipe.time = action.recipe.time;
        recipe.difficulty = action.recipe.difficulty;
        //recipe.categories = action.recipe.categories;
        recipe.ingredients = action.recipe.ingredients;
        recipe.instruction = action.recipe.instruction;
        recipe.userid = action.recipe.userid;

        this.recipeService.createRecipe(recipe)
            .then((res) => {
                alert('Rezept wurde erfolgreich gespeichert.');
                /*
                recipe.id = res;
                const recipes = context.getState().recipes;
                const newRecipes = [...recipes, recipe];
                context.patchState({
                    recipes: newRecipes,
                });*/
            })
            .catch((err) => {
                alert('Rezept konnte leider nicht gespeichert werden.');
            });
    }

    @Action(GetRecipes)
    getRecipes(context: StateContext<RecipesStateModel>) {
        return this.recipeService.getRecipes().pipe(tap((result) => {
            const state = context.getState();
            context.patchState({
                ...state,
                recipes: result,
            });
        }));
    }

    // @Action(GetRecipesByUser)
    // getRecipesByUser(context: StateContext<RecipesStateModel>) {
    //     return this.recipeService.getRecipesByUser().pipe(tap((result) => {
    //         const state = context.getState();
    //         context.patchState({
    //             ...state,
    //             recipes: result,
    //         });
    //     }));
    // }

    @Action(GetRecipe)
    getRecipe(context: StateContext<RecipesStateModel>, action: GetRecipe) {
        return this.recipeService.getRecipe(action.id).pipe(tap((result) => {
            const state = context.getState();
            context.patchState({
                ...state,
                recipeDetail: result,
            });
        }));
    }

    @Action(DeleteRecipe)
    deleteRecipe(context: StateContext<RecipesStateModel>, action: DeleteRecipe) {
        this.recipeService.deleteRecipe(action.id)
            .then(res => {
                const recipes = context.getState().recipes;
                const newRecipes = recipes.filter(item => {
                    return item.id != action.id;
                });
                context.patchState({
                    recipes: newRecipes,
                });
            })
            .catch(err => {
                alert('Rezept konnte leider nicht gelöscht werden.');
            });
    }


    @Action(UpdateRecipe)
    updateRecipe(context: StateContext<RecipesStateModel>, action: UpdateRecipe) {
        this.recipeService.updateRecipe(action. id, action.recipe)
            .then(res => {
                alert('Rezept wurde erfolgreich aktualisiert.');
            })
            .catch(err => {
                alert('Rezept konnte leider nicht aktualisiert werden.');
            });
    }
}