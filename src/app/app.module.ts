import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { OneLaunchComponent } from './one-launch/one-launch.component';
import { OneLaunchInBiggerComponent } from './one-launch-in-bigger/one-launch-in-bigger.component';


export const appRouteList: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home',
    },
    {
      path: 'home',
      component: HomeComponent,
      data: {animation: 'isLeft'}
    },
    {
      path: 'schedule',
      component: HomeComponent,
      data: {animation: 'isLeft'}
    },
    {
      path: 'mission/:id',
      component: OneLaunchInBiggerComponent,
      data: {animation: 'isRight'}
    },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneLaunchComponent,
    OneLaunchInBiggerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouteList),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
