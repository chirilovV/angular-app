import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {SharedModule} from '../shared/shared.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ClientSideStatisticsComponent} from './client-side-statistics/client-side-statistics.component';
import {ServerSideStatisticsComponent} from './server-side-statistics/server-side-statistics.component';

@NgModule({
  declarations: [
    ClientSideStatisticsComponent,
    ServerSideStatisticsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    SharedModule,
    MatPaginatorModule,
  ]
})
export class StatisticsModule {}
