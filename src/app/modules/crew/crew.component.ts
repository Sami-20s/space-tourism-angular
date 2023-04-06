import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewDetailsComponent } from './components/crew-details/crew-details.component';
import { CrewService } from './services/crew.service';
import { Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CommonModule, CrewDetailsComponent],
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit, OnDestroy {
  currentSlide: number = 0;
  subscription: Subscription;
  constructor(private crewService: CrewService) {
    this.autoSwipe();
  }
  ngOnInit(): void {}

  getCrew() {
    return this.crewService.crew;
  }
  onSlide(dot) {
    this.currentSlide = dot;
  }
  autoSwipe() {
    this.subscription = interval(10000).subscribe((number) => {
      if (this.currentSlide == 3) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
