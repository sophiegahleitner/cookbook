import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from './modules/recipes/components/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './modules/recipes/components/recipe-detail/recipe-detail.component';
import {RegisterComponent} from './modules/authentication/components/register/register.component';
import {LoginComponent} from './modules/authentication/components/login/login.component';
import {ProfileComponent} from './modules/authentication/components/profile/profile.component';
import {NotFoundComponent} from "./modules/general/components/not-found/not-found.component";
import {RecipeEditComponent} from "./modules/recipes/components/recipe-edit/recipe-edit.component";
import { ForgotPasswordComponent } from './modules/authentication/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './modules/authentication/components/verify-email/verify-email.component';
// Import canActivate guard services
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";
// Include route guard in routes array
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'recipes'
    },
    {path: 'recipes', component: RecipeListComponent, canActivate: [AuthGuard]},
    {path: 'recipe/new', component: RecipeEditComponent, canActivate: [AuthGuard], data: {editRecipe: false}},
    {path: 'recipe/:id', component: RecipeDetailComponent, canActivate: [AuthGuard]},
    {path: 'recipe/:id/edit', component: RecipeEditComponent, canActivate: [AuthGuard], data: {editRecipe: true}},
    {path: 'register', component: RegisterComponent, canActivate: [SecureInnerPagesGuard]},
    {path: 'login', component: LoginComponent, canActivate: [SecureInnerPagesGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
    { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
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
