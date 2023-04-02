import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationService } from './services/destination.service';
import { Planet } from './interfaces/planet.interface';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [CommonModule, DestinationDetailsComponent],
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent {
  activeState: string = 'moon';
  currentPlanet: Planet;
  constructor(private destinationService: DestinationService) {
    this.currentPlanet = this.getPlanets[0];
  }
  get getPlanets(): Planet[] {
    return this.destinationService.planets;
  }
  checkPlanetState(planetName) {
    return planetName == this.activeState;
  }
  selectPlanet(planet: Planet) {
    this.activeState = planet.name;
    this.currentPlanet = planet;
  }
}
