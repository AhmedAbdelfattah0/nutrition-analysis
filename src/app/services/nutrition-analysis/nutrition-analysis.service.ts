import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NutritionFacts } from 'src/app/nutrition-facts/nutrition-facts';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NutritionAnalysisService {
  totalDailyResponse: BehaviorSubject<any> = new BehaviorSubject(<any>{});
  ingredients: BehaviorSubject<any[]> = new BehaviorSubject(<any>[]);
  foodArr: BehaviorSubject<any[]> = new BehaviorSubject(<any>[]);
  constructor(private http: HttpClient) {}

  nutritionData(ingredients: string) {
    return this.http.get(
      `/nutrition-data?app_key=${environment.app_key}&app_id=${environment.app_id}&ingr=${ingredients}`
    );
  }

  foodTextAnalysis(ingredients: any) {
    return this.http.post(
      `/nutrition-details?app_id=${environment.app_id}&app_key=${environment.app_key}`,
      ingredients
    );
  }

  SetTotalDailyResponse(data: any) {
    this.totalDailyResponse.next(data);
  }

  SetIngredients(data: any) {
    this.ingredients.next(data);
  }
  SetfoodArr(data: any) {
    this.foodArr.next(data);
  }
}
