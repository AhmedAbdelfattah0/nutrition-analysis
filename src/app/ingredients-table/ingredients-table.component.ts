import { Component, Input, OnChanges, OnInit, DoCheck } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { NutritionAnalysisService } from '../services/nutrition-analysis/nutrition-analysis.service';

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.css']
})
export class IngredientsTableComponent implements OnInit, OnChanges,DoCheck {
 foodIngredients:any[]=[]
 totalDailyResponse:any
  displayedColumns: string[] = ['quantity', 'measure', 'foodMatch', 'calories', 'weight' ];




  dataSource:any=new MatTableDataSource([])
  constructor(
    private nutritionAnalysisService: NutritionAnalysisService
      ) { }
  ngDoCheck(): void {
    // this.dataSource= new MatTableDataSource<any>(this.foodIngredients);

  }
  ngOnChanges(): void {
    // debugger
    // this.dataSource= new MatTableDataSource<any>(this.foodIngredients);
    // console.log(this.foodIngredients);

  }

  ngOnInit(): void {
    // this.dataSource= new MatTableDataSource<any>(this.foodIngredients);


    // console.log(this.foodIngredients);
debugger
    this.getFoodIngredients()
   this.getNutritionDetails()
  }


  getFoodIngredients(){
debugger

    this.nutritionAnalysisService.ingredients.subscribe(res=>{
debugger

      res.forEach((element: any) => {
        this.nutritionAnalysisService
          .nutritionData(element)
          .subscribe((res: any) => {
            let obj = {
              calories: res.calories,
              quantity: res.ingredients[0].parsed[0].quantity,
              measure: res.ingredients[0].parsed[0].measure,
              foodMatch: res.ingredients[0].parsed[0].foodMatch,
              weight: res.ingredients[0].parsed[0].weight,
            };
            this.foodIngredients.push(obj);
            console.log(this.foodIngredients);
           this.dataSource= new MatTableDataSource<any>(this.foodIngredients);

          });
      });
    })



  }

  getNutritionDetails(){
debugger

    this.nutritionAnalysisService.foodArr.subscribe(res=>{
      debugger

      this.setNutritionDetails(res)
    })
  }

  setNutritionDetails(obj:any){
    this.nutritionAnalysisService.foodTextAnalysis(obj).subscribe((res) => {
      this.totalDailyResponse = res;

    });
  }
}
