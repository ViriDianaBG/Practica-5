import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  tareas: any[] = [];

  constructor(
    private tareaService: TareaService,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.cargarTareas();
  }

  async cargarTareas() {
    this.tareas = await this.tareaService.obtenerTareas();
  }

  nuevaTarea() {
    this.navCtrl.navigateForward('/tarea');
  }

  verDetalles(id: number) {
    this.navCtrl.navigateForward(`/detalles-tarea/${id}`);
  }
  // Add this inside your HomePage class
  get tareasPendientes(): number {
    return this.tareas ? this.tareas.filter((t) => !t.completada).length : 0;
  }
  get tareasCompletadas(): number {
    return this.tareas.filter((t) => t.completada).length;
  }
}
