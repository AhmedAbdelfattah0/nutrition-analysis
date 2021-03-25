import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionAnalysisService } from '../services/nutrition-analysis/nutrition-analysis.service';

@Component({
  selector: 'app-ingredients-analyse',
  templateUrl: './ingredients-analyse.component.html',
  styleUrls: ['./ingredients-analyse.component.css'],
})
export class IngredientsAnalyseComponent implements OnInit {
  // myForm=new FormGroup({
  //   ingredientsControl:new FormControl(['',Validators.required])}
  // )
  ingredientsControl: FormControl = new FormControl('', Validators.required);
  ingredients: any[] = [];
  totalDailyResponse: any;
  foodArrLength: any;
  constructor(
    private nutritionAnalysisService: NutritionAnalysisService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  analyse() {
    this.ingredients = [];
    // console.log( this.ingredientsControl.value);
    let obj = {
      ingr: this.ingredientsControl.value.split('\n'),
    };

    this.nutritionAnalysisService.SetIngredients(obj.ingr);
    this.nutritionAnalysisService.SetfoodArr(obj);
    this.route.navigate(['/summary-breakdown']);
    console.log('3', this.ingredients);
  }
}
