import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
