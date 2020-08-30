import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, FormsModule, ReactiveFormsModule, NgbModule],
})
export class SharedModule {}
