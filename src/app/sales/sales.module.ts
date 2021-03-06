import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortComponent } from './pages/sort/sort.component';

import { CapitalLettersPipe } from './pipes/capital-lettes.pipe';
import { FliesPipe } from './pipes/flies.pipe';
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent,

    CapitalLettersPipe,
    FliesPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortComponent
  ]
})
export class SalesModule { }
