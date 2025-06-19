import { Component } from '@angular/core';
import { TareaService } from '../services/tarea.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
  standalone: false,
})
export class TareaPage {
  tarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    fechaVencimiento: '',
  };

  constructor(
    private tareaService: TareaService,
    private navCtrl: NavController
  ) {}

  async guardar() {
    if (
      !this.tarea.titulo ||
      !this.tarea.descripcion ||
      !this.tarea.fechaVencimiento
    ) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    await this.tareaService.agregarTarea(this.tarea);
    this.navCtrl.navigateBack('/home');
  }
}
