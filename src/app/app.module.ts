import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'crisis-list', component: CrisisListComponent },
  { path: 'hero-list', component: HeroListComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
