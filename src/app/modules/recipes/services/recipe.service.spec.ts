import {TestBed} from '@angular/core/testing';
import {RecipeService} from './recipe.service';
import {RecipeModel} from "../models/recipe.model";
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from "rxjs/index";

const recipe: RecipeModel = new RecipeModel();
recipe.title = 'Mein neues Rezept';
recipe.time = 60;
recipe.difficulty = '';
recipe.ingredients = [];
recipe.instruction = [];

const collectionStub = {
    add: jasmine.createSpy('add').and.returnValue(new Observable()),
};

const docStub = {
    delete: jasmine.createSpy('delete').and.returnValue(true),
};

const firestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub),
    doc: jasmine.createSpy('doc').and.returnValue(docStub)
};

describe('RecipeService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            RecipeService,
            { provide: AngularFirestore, useValue: firestoreStub }
        ],
    }));

    it('should be created', () => {
        const service: RecipeService = TestBed.get(RecipeService);
        expect(service).toBeTruthy();
    });

    it('should create recipe', () => {
        const service: RecipeService = TestBed.get(RecipeService);
        const firestore = TestBed.get(AngularFirestore);
        const result = service.createRecipe(recipe);
        expect(firestore.collection).toHaveBeenCalledWith('recipes');
        expect(firestore.collection().add).toHaveBeenCalledWith(JSON.parse(JSON.stringify(recipe)));
    });

    it('should delete recipe', () => {
        const service = TestBed.get(RecipeService);
        const firestore = TestBed.get(AngularFirestore);
        const result = service.deleteRecipe('abc');
        expect(firestore.doc).toHaveBeenCalledWith('recipes/abc');
        expect(firestore.doc().delete).toHaveBeenCalled();
        expect(result).toBeTruthy();
    });
});
