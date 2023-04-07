import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Crew } from '../../interfaces/crew';

@Component({
  selector: 'app-crew-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.scss'],
})
export class CrewDetailsComponent {
  @Input() crew: Crew;
}
