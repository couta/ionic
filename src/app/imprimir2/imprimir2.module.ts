import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Imprimir2Page } from './imprimir2.page';

const routes: Routes = [
  {
    path: '',
    component: Imprimir2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Imprimir2Page]
})
export class Imprimir2PageModule {}
