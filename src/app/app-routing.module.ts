import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsAnalyseComponent } from './ingredients-analyse/ingredients-analyse.component';
import { IngredientsTableComponent } from './ingredients-table/ingredients-table.component';

const routes: Routes = [
  {path:'',component:IngredientsAnalyseComponent},
  {path:'ingredients-analyse',component:IngredientsAnalyseComponent},
  {path:'summary-breakdown',component:IngredientsTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
