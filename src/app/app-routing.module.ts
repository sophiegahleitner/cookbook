import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipelistComponent } from "./modules/recipes/components/recipe-list/recipe-list.component";
import { RecipedetailComponent } from "./modules/recipes/components/recipe-detail/recipe-detail.component";
import {RegisterComponent} from "./modules/authentication/components/register/register.component";
import {LoginComponent} from "./modules/authentication/components/login/login.component";
import {ProfileComponent} from "./modules/authentication/components/profile/profile.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'recipes'},
    { path: 'recipes', component: RecipelistComponent},
    { path: 'recipe/:id', component: RecipedetailComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
