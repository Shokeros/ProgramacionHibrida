import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/angular/standalone';
import { Circulo } from '../modelo/figuraGeometrica';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonButton, FormsModule, IonInput, IonCol, IonRow, IonGrid, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonItem, IonList]
})
export class CirculoComponent  implements OnInit {
  radioStr : string = "";
  resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetroCirculo() {
    const radio = parseInt(this.radioStr)
    const figuraGeometrica = new Circulo("círculo", radio)
      if (Number.isNaN(figuraGeometrica.radio)){
        this.resultado = `Ingrese un valor válido.`
      }
      else {
        const operacion = figuraGeometrica.calcularPerimetro()
        this.resultado = `El perímetro del ${figuraGeometrica.nombre} es de ${operacion} cm.`
      }
  
  }
  
 }

