import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { TestComponent } from './components/test/test.component';
import { InputComponent } from './components/input/input.component';
import { FeatureHeadlineComponent } from './components/feature-headline/feature-headline.component';
import { FeatureHeaderComponent } from './components/feature-header/feature-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    TestComponent,
    InputComponent,
    FeatureHeadlineComponent,
    FeatureHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
],
  exports: [
    ButtonComponent,
    TestComponent,
    CardComponent,
    InputComponent,
    FeatureHeadlineComponent,
    FeatureHeaderComponent
  ]
})
export class UiModule {}
