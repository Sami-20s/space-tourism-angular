import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Technology } from '../../interfaces/technology';

@Component({
  selector: 'app-technology-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-details.component.html',
  styleUrls: ['./technology-details.component.scss'],
})
export class TechnologyDetailsComponent {
  @Input() technology: Technology;
}
