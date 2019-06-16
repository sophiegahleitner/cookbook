import {RecipeModel} from "../models/recipe.model";

export class CreateRecipe {
    static readonly type = '[Create Recipe Form] CreateRecipe';

    constructor(public recipe: RecipeModel) {}
}

export class GetRecipes {
    static readonly type = '[Recipes List] GetRecipes';
}

export class GetRecipesByUser {
    static readonly type = '[Recipes List] GetRecipes';

    constructor(public userid: string) {
    }
}

export class GetRecipe {
    static readonly type = '[Recipe Detail] GetRecipe';

    constructor(public id: string) {}
}

export class DeleteRecipe {
    static readonly type = '[Recipe Actions] DeleteRecipe';

    constructor(public id: string) {}
}

export class UpdateRecipe {
    static readonly type = '[Recipe Actions] UpdateRecipe';

    constructor(public id: string, public recipe: RecipeModel) {}
}