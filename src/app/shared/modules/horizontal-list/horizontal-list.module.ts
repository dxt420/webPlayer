import { HorizontalListService } from './components/services/horizontal-list-service.service';
import { CardModule } from './../card/card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HorizontalListComponent } from './components/horizontal-list.component';

@NgModule({
  declarations: [HorizontalListComponent],
  imports: [CommonModule, CardModule],
  exports: [HorizontalListComponent],
  providers: [HorizontalListService]
})
export class HorizontalListModule {}