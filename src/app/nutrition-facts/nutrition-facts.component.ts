import { Component, Input, OnInit } from '@angular/core';
import { NutritionFacts } from './nutrition-facts';

@Component({
  selector: 'app-nutrition-facts',
  templateUrl: './nutrition-facts.component.html',
  styleUrls: ['./nutrition-facts.component.css']
})
export class NutritionFactsComponent implements OnInit {
  @Input()
  nutritionFacts!: NutritionFacts;
  constructor() { }

  ngOnInit(): void {
  }

}
