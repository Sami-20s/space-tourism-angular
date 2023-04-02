import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss'],
})
export class DestinationDetailsComponent {
  constructor() {}
  @Input('planet') planet;
}
