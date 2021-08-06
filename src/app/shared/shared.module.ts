import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgShow } from './ng-show.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgShow],
  exports: [NgShow],
})
export class SharedModule {}
