import { Component, OnInit } from '@angular/core';
import { TrianguloEscaleno } from '../modelo/figuraGeometrica';
import { IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButton, FormsModule, IonInput, IonCol, IonRow, IonGrid, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonItem, IonList]
})
export class TrianguloComponent  implements OnInit {
  ladoAStr : string = "";
  ladoBStr : string = "";
  ladoCStr : string = "";
  resultado : string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetroTriangulo() {
    const ladoA = parseInt(this.ladoAStr)
    const ladoB = parseInt(this.ladoBStr)
    const ladoC = parseInt(this.ladoCStr)
    const figuraGeometrica = new TrianguloEscaleno("triángulo", ladoA, ladoB, ladoC)
    if (Number.isNaN(figuraGeometrica.ladoA) || Number.isNaN(figuraGeometrica.ladoB) || Number.isNaN(figuraGeometrica.ladoC)){
      this.resultado = `Ingrese valores válidos.`
    }
    else {
      const operacion = figuraGeometrica.calcularPerimetro()
      this.resultado = `El perímetro del ${figuraGeometrica.nombre} es de ${operacion} cm.`
    }

  }

}
