import { Component } from '@angular/core';
import { IonList, IonItem, IonSelect, IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonSelectOption, IonSelect, IonItem, IonList, CommonModule, 
            CirculoComponent, TrianguloComponent],
  standalone: true,
})
export class HomePage {
  tipoFigura : string = "";

  constructor() {}

  figuraCirculo() {return this.tipoFigura == "circulo"}
  figuraTriangulo() {return this.tipoFigura == "triangulo"}

  seleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = $event.detail.value
  }
}
