import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private storageKey = 'tareas';

  constructor() {}

  async obtenerTareas(): Promise<any[]> {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  async guardarTareas(tareas: any[]): Promise<void> {
    localStorage.setItem(this.storageKey, JSON.stringify(tareas));
  }

  async agregarTarea(tarea: any): Promise<void> {
    const tareas = await this.obtenerTareas();
    tarea.id = Date.now();
    tareas.push(tarea);
    await this.guardarTareas(tareas);
  }

  async obtenerTareaPorId(id: number): Promise<any | undefined> {
    const tareas = await this.obtenerTareas();
    return tareas.find((t) => t.id === id);
  }

  async actualizarTarea(tareaActualizada: any): Promise<void> {
    const tareas = await this.obtenerTareas();
    const index = tareas.findIndex((t) => t.id === tareaActualizada.id);
    if (index !== -1) {
      tareas[index] = tareaActualizada;
      await this.guardarTareas(tareas);
    }
  }
}
