import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonSpinner, IonCard, IonIcon } from '@ionic/angular/standalone';
import { CatApiService } from 'src/app/services/cat-api';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.page.html',
  styleUrls: ['./gatos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonSpinner, IonCard, IonIcon, CommonModule, FormsModule]
})
export class GatosPage {
  catImages: any[] = [];
  isLoading: boolean = false;
  loadedImages: number = 0;
  
  constructor(private catApiService: CatApiService) {}

  ionViewDidEnter() {
    if (this.catImages.length === 0) this.buscarGatinhos();
  }

  buscarGatinhos() {
    this.isLoading = true;
    this.loadedImages = 0;
    this.catApiService.getMultipleCatImages(5).subscribe(data => {
      this.catImages = data;
    }, error => {
      console.error('Erro ao buscar imagens!', error);
      this.isLoading = false;
    });
  }

  onImageLoad() { 
    this.loadedImages++;
    if (this.loadedImages === this.catImages.length) {
      this.isLoading = false;
    }
  }
}