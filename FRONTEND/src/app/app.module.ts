import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideComponent } from './components/slide/slide.component';
import { LoginComponent } from './components/login/login.component';

import {Routes, RouterModule, Router} from '@angular/router';//import Routes Module
import {CommonModule} from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { CrudStoryComponent } from './components/crud-story/crud-story.component';

import {HttpClientModule} from '@angular/common/http';

const routesConfig:Routes = [
 
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'crud-story', component: CrudStoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    LoginComponent,
    RegisterComponent,
    CrudStoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

