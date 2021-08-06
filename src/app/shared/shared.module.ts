import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgShowDirective } from './ng-show.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgShowDirective],
  exports: [NgShowDirective],
})
export class SharedModule {}
