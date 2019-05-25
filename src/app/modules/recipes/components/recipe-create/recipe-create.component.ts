import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

    createRecipeForm: FormGroup;
    ingredients: FormArray;
    instruction: FormArray;

    titleAlert: string = 'This field is required';
    post: any = '';

    difficulty: Array<string> = [
        'leicht',
        'mittel',
        'schwierig',
    ];

    categories: Array<any> = [
        { id: 1, name: 'Dessert' },
        { id: 2, name: 'Backen' },
        { id: 3, name: 'Vegetarisch' },
        { id: 4, name: 'Vegan' },
        { id: 5, name: 'Hauptspeise' }
    ];


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createForm()
    }

    createForm() {
        this.createRecipeForm = this.formBuilder.group({
            'title': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            'difficulty': [null, [Validators.required]],
            'time': [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
            'categories': this.formBuilder.array(this.categories.map(control => new FormControl(false))),
            'ingredients': this.formBuilder.array([this.createIngredients()]),
            'instruction': this.formBuilder.array([this.createInstruction()])
        });
    }

    createIngredients(): FormGroup {
        return this.formBuilder.group({
            'ingredient': [null, [Validators.required]]
        })
    }

    addIngredient(): void {
        this.ingredients = this.createRecipeForm.get('ingredients') as FormArray;
        this.ingredients.push(this.createIngredients());
    }

    createInstruction(): FormGroup {
        return this.formBuilder.group({
            'description': [null, [Validators.required]],
        })
    }

    addStep(): void {
        this.instruction = this.createRecipeForm.get('instruction') as FormArray;
        this.instruction.push(this.createInstruction());
    }

    onSubmit(post) {
        console.log(post.categories)
        this.post = post;
        console.log(this.post);
    }
}
