import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Date();
  
  appareils = [
    {
      name: 'Ordinateur',
      status: 'éteint'
    },
    {
      name: 'Lampe',
      status: 'allumé'
    },
    {
      name: 'Telephone',
      status: 'inconnu'
    }
  ];

 
  //Faire que le button s'active après 4 secondes, en changeant le isAuth en true
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('Tout est allumé.');
}
}