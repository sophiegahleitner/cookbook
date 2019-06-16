import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {RecipeModel} from "../models/recipe.model";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

@Injectable()

export class RecipeService {

    constructor(private firestore: AngularFirestore) {
    }

    getRecipe(id: string): Observable<RecipeModel> {
        let recipe =  this.firestore.doc<RecipeModel>('recipes/' + id);
        return recipe.snapshotChanges().pipe(
            map(a => {
                const data = a.payload.data() as RecipeModel;
                const id = a.payload.id;
                return { id, ...data };
            })
        );
    }

    getRecipes(): Observable<RecipeModel[]> {
        let recipeCollection =  this.firestore.collection<RecipeModel>('recipes');
        return recipeCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as RecipeModel;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getRecipesByUser(userid): Observable<RecipeModel[]> {
        let recipeCollection = this.firestore.collection<RecipeModel>('recipes');
        return recipeCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as RecipeModel;
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        );
    }

    createRecipe(recipe: RecipeModel) {
        return new Promise((resolve, reject) => {
            this.firestore.collection('recipes').add(JSON.parse(JSON.stringify(recipe)))
                .then((res) => {
                    resolve(res.id);
                })
                .catch((err) => {
                    reject(err);
                })
        });
    }

    updateRecipe(id: string, recipe: RecipeModel) {
        return this.firestore.doc('recipes/' + id).update(recipe);
    }

    deleteRecipe(id: string) {
        return this.firestore.doc('recipes/' + id).delete();
    }
}
