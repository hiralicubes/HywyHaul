import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationsComponent } from './authentications/authentications.component';
import { LoignComponent } from './authentications/loign/loign.component';
import { RegisterComponent } from './authentications/register/register.component';
import { ForgotComponent } from './authentications/forgot/forgot.component';
import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateLoadComponent } from './pages/create-load/create-load.component';
import { HeaderComponent } from './common/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadListComponent } from './pages/load-list/load-list.component';
import { LoadDetailsComponent } from './pages/load-details/load-details.component';

const routes: Routes = [
    {
        path: 'pages', component: PagesComponent,
        children: [
            { path: 'load-details', component: LoadDetailsComponent },
            { path: 'load-list', component: LoadListComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'create-load', component: CreateLoadComponent },
        ]
    },
    {
        path: '', component: AuthenticationsComponent,
        children: [
            { path: '', component: LoignComponent },
            { path: 'login', component: LoignComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot', component: ForgotComponent },
        ]
    },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [RouterModule],
    declarations: [
        AuthenticationsComponent,
        LoignComponent,
        RegisterComponent,
        ForgotComponent,
        PagesComponent,
        ProfileComponent,
        CreateLoadComponent,
        HeaderComponent,
        LoadListComponent,
        LoadDetailsComponent
    ]
})
export class AppRoutingModule { }
