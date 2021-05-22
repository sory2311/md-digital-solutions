import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { R2Component } from './code/r2/r2.component';
import { R3Component } from './code/r3/r3.component';
import { R4Component } from './code/r4/r4.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  {path: "", component: CodeComponent},
  {path: "r2", component: R2Component},
  {path: "r3", component: R3Component},
  {path: "r4", component: R4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
