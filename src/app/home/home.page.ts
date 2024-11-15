import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePage {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }
  goToIgerilekua() {
    this.router.navigate(['/igerilekua']);
  }

  goToJatetxea() {
    this.router.navigate(['/jatetxea']);
  }

  goToAlojamientos() {
    this.router.navigate(['/alojamientos']);
  }

  goToAloIndividual() {
    this.router.navigate(['/alo-individual']);
  }

  goToJarduerak() {
    this.router.navigate(['/jarduerak']);
  }

}
