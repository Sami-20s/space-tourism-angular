import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewDetailsComponent } from './components/crew-details/crew-details.component';
import { CrewService } from './services/crew.service';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CommonModule, CrewDetailsComponent],
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent {
  constructor(private crewService: CrewService) {}
  getCrew() {
    return this.crewService.crew;
  }
}
