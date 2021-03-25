import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsAnalyseComponent } from './ingredients-analyse.component';

describe('IngredientsAnalyseComponent', () => {
  let component: IngredientsAnalyseComponent;
  let fixture: ComponentFixture<IngredientsAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
