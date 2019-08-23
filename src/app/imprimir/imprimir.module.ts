import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImprimirPage } from './imprimir.page';


declare var Socket: any;

const routes: Routes = [
  {
    path: '',
    component: ImprimirPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImprimirPage]
})
export class ImprimirPageModule {}
