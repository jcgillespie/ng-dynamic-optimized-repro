import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';



@NgModule({
  declarations: [DynamicContentComponent],
  imports: [
    CommonModule
  ],
  exports: [DynamicContentComponent]
})
export class DynamicModule { }
