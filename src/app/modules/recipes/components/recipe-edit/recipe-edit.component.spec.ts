import { NO_ERRORS_SCHEMA } from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RecipeEditComponent} from './recipe-edit.component';
import {MaterialModule} from "../../../general/material.module";
import {FormBuilder} from "@angular/forms";
import {NgxsModule, StateStream, Store} from "@ngxs/store";
import {RecipeService} from "../../services/recipe.service";
import {RecipesState} from "../../store/recipes.state";
import {environment} from "../../../../../environments/environment";
import {AngularFirestore} from "@angular/fire/firestore";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const firestoreStub = {};

describe('RecipeEditComponent', () => {
    let component: RecipeEditComponent;
    let fixture: ComponentFixture<RecipeEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RecipeEditComponent],
            imports: [
                MaterialModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                NgxsModule.forRoot([RecipesState], {
                    developmentMode: !environment.production,
                }),
            ],
            providers: [
                FormBuilder,
                Store,
                StateStream,
                RecipeService,
                { provide: AngularFirestore, useValue: firestoreStub }
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipeEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should adjust title', () => {
        const title: HTMLElement = fixture.nativeElement.querySelector('h1');
        fixture.componentInstance.editRecipe = true;
        fixture.detectChanges();
        expect(title).toBeDefined();
        expect(title.innerText).toEqual('Rezept erstellen');
    });
/*
    it('should add input field for ingredient', () => {
        const addIngredient: HTMLElement = fixture.nativeElement.querySelector('.button-add-ingredient');
        addIngredient.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('#mat-input-4')).not.toBeNull();
    });
    */
});
