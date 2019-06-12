export class RecipeModel {
    id: string;
    title: string;
    time: number;
    difficulty: string;
    //categories: Category[];
    ingredients: Ingredient[];
    instruction: Instruction[];
/*
    clone() {
        const recipe = new RecipeModel();
        recipe.title = this.title;
        recipe.time = this.time;
        recipe.difficulty = this.difficulty;
        recipe.categories = this.categories;
        recipe.ingredients = this.ingredients;
        recipe.instruction = this.instruction;
        return recipe;
    }*/
}

interface Category {
    name: string;
}

interface Ingredient {
    ingredient: string;
}

interface Instruction {
    description: string;
}