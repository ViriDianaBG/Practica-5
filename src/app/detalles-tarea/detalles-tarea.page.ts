import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-detalles-tarea',
  templateUrl: './detalles-tarea.page.html',
  styleUrls: ['./detalles-tarea.page.scss'],
  standalone: false,
})
export class DetallesTareaPage {
  tarea: any = {
    id: 0,
    titulo: '',
    descripcion: '',
    fechaVencimiento: '',
  };

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private navCtrl: NavController
  ) {}

  async ionViewWillEnter() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const data = await this.tareaService.obtenerTareaPorId(id);
    if (data) this.tarea = data;
  }

  async actualizar() {
    await this.tareaService.actualizarTarea(this.tarea);
    this.navCtrl.navigateBack('/home');
  }
}
