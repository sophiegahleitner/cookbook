import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from './modules/recipes/components/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './modules/recipes/components/recipe-detail/recipe-detail.component';
import {RegisterComponent} from './modules/authentication/components/register/register.component';
import {LoginComponent} from './modules/authentication/components/login/login.component';
import {ProfileComponent} from './modules/authentication/components/profile/profile.component';
import {NotFoundComponent} from "./modules/general/components/not-found/not-found.component";
import {RecipeEditComponent} from "./modules/recipes/components/recipe-edit/recipe-edit.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipes'
    },
    {path: 'recipes', component: RecipeListComponent},
    {path: 'recipe/new', component: RecipeEditComponent, data: {editRecipe: false}},
    {path: 'recipe/:id', component: RecipeDetailComponent},
    {path: 'recipe/:id/edit', component: RecipeEditComponent, data: {editRecipe: true}},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
