import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesTareaPageRoutingModule } from './detalles-tarea-routing.module';

import { DetallesTareaPage } from './detalles-tarea.page';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesTareaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetallesTareaPage],
})
export class DetallesTareaPageModule {}
