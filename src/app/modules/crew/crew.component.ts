import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewDetailsComponent } from './components/crew-details/crew-details.component';
import { CrewService } from './services/crew.service';
import { BehaviorSubject, Subscription, interval, map, switchMap } from 'rxjs';
import { Crew } from './interfaces/crew';

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
  swiperInterval$ = new BehaviorSubject<any>(null);

  constructor(private crewService: CrewService) {
    this.autoSwipe();
  }
  ngOnInit(): void {}

  getCrew(): Crew[] {
    return this.crewService.crew;
  }
  onSlide(dot) {
    this.currentSlide = dot;
    this.swiperInterval$.next(null);
  }
  autoSwipe() {
    this.subscription = this.swiperInterval$
      .pipe(switchMap(() => interval(10000)))
      .subscribe((number) => {
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
