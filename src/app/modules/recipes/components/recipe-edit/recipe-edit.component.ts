import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeModel} from "../../models/recipe.model";
import {CreateRecipe, GetRecipe, UpdateRecipe} from "../../store/recipes.action";
import {Select, Store} from '@ngxs/store';
import {Observable} from "rxjs/index";
import {RecipesState} from "../../store/recipes.state";
import {isNullOrUndefined} from "util";

@Component({
    selector: 'app-recipe-create',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

    @Select(RecipesState.recipeDetail) recipeDetail$: Observable<RecipeModel>;

    recipe: RecipeModel = new RecipeModel();
    editRecipe: boolean = false;

    // form
    createRecipeForm: FormGroup;
    ingredients: FormArray;
    instruction: FormArray;

    // error
    titleAlert: string = 'Dieses Feld ist ein Pflichtfeld';

    // values
    difficulty: Array<string> = ['leicht', 'mittel', 'schwierig',];

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.data.subscribe(data => this.editRecipe = data.editRecipe);

        if(this.editRecipe) {
            const id = this.route.snapshot.paramMap.get('id');
            this.store.dispatch(new GetRecipe(id));

            this.recipeDetail$.subscribe(data => {
                this.recipe = {
                    id: data.id,
                    title: data.title,
                    time: data.time,
                    difficulty: data.difficulty,
                    ingredients: data.ingredients,
                    instruction: data.instruction,
                } as RecipeModel;
                this.createForm();
                if (!isNullOrUndefined(this.recipe.ingredients)) {
                    this.recipe.ingredients.forEach((item) => {
                        this.addIngredient(item.ingredient);
                    });
                }
                if (!isNullOrUndefined(this.recipe.instruction)) {
                    this.recipe.instruction.forEach((step) => {
                        this.addStep(step.description);
                    });
                }
            });
        } else {
            this.createForm();
            this.addIngredient();
            this.addStep();
        }
    }

    createForm() {
        this.createRecipeForm = this.formBuilder.group({
            'title': [this.recipe.title, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            'difficulty': [this.recipe.difficulty, [Validators.required]],
            'time': [this.recipe.time, [Validators.required, Validators.pattern('^[0-9]*$')]],
            //'categories': this.formBuilder.array(this.categories.map(control => new FormControl(false))),
            'ingredients': this.formBuilder.array([]),
            'instruction': this.formBuilder.array([])
        });
    }

    createIngredients(ingredient: string = null): FormGroup {
        return this.formBuilder.group({
            'ingredient': [ingredient, [Validators.required]]
        })
    }

    addIngredient(ingredient: string = null): void {
        this.ingredients = this.createRecipeForm.get('ingredients') as FormArray;
        this.ingredients.push(this.createIngredients(ingredient));
    }

    createInstruction(description: string = null): FormGroup {
        return this.formBuilder.group({
            'description': [description, [Validators.required]],
        })
    }

    addStep(description: string = null): void {
        this.instruction = this.createRecipeForm.get('instruction') as FormArray;
        this.instruction.push(this.createInstruction(description));
    }

    onSubmit(data) {
        this.recipe.title = data.title;
        this.recipe.time = data.time;
        this.recipe.difficulty = data.difficulty;
        this.recipe.ingredients = data.ingredients;
        this.recipe.instruction = data.instruction;

        if (this.editRecipe) {
            this.store.dispatch(new UpdateRecipe(this.recipe.id, this.recipe)).subscribe(() => {
                this.router.navigate(['/']);
            });
        } else {
            this.store.dispatch(new CreateRecipe(this.recipe)).subscribe(() => {
                this.router.navigate(['/']);
            });
        }
    }
}
