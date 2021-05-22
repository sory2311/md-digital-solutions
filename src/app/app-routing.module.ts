import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';

const routes: Routes = [
  {path: "r2", component: R2Component},
  {path: "r3", component: R3Component},
  {path: "r4", component: R4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
