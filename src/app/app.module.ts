import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from './matrial.module';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { IngredientsAnalyseComponent } from './ingredients-analyse/ingredients-analyse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCallInterceptor } from './services/http-call.interceptor';
import { NutritionFactsComponent } from './nutrition-facts/nutrition-facts.component';
import { IngredientsTableComponent } from './ingredients-table/ingredients-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    IngredientsAnalyseComponent,
    NutritionFactsComponent,
    IngredientsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatrialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpCallInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
