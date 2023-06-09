import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Planet } from '../../interfaces/planet.interface';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss'],
})
export class DestinationDetailsComponent {
  constructor() {}
  @Input('planet') planet : Planet;
}
