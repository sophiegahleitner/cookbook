import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

    createRecipeForm: FormGroup;
    titleAlert: string = 'This field is required';
    post: any = '';

    // select
    difficulty: Array<string> = [
        'leicht',
        'mittel',
        'schwierig',
    ];

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createForm()
    }

    createForm() {
        this.createRecipeForm = this.formBuilder.group({
            'title': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            'difficulty': [null, [Validators.required]],
            'image': [null, [Validators.required]],
        });
    }

    onSubmit(post) {
        this.post = post;
        console.log(this.post);
    }
}
