import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyService } from './services/technology.service';
import { Technology } from './interfaces/technology';
import { TechnologyDetailsComponent } from './components/technology-details/technology-details.component';
import { BehaviorSubject, Subscription, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, TechnologyDetailsComponent],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit, OnDestroy {
  currentTechno: number = 0;
  subscription: Subscription;
  swiperInterval$ = new BehaviorSubject<any>(null);
  constructor(private technologyService: TechnologyService) {}
  ngOnInit(): void {
    this.autoSwipe();
  }
  selectTechno(techno) {
    this.currentTechno = techno;
    this.swiperInterval$.next(null);
  }
  get getTechnologies(): Technology[] {
    return this.technologyService.technologies;
  }
  autoSwipe() {
    this.subscription = this.swiperInterval$
      .pipe(switchMap(() => interval(10000)))
      .subscribe((number) => {
        if (this.currentTechno == 2) {
          this.currentTechno = 0;
        } else {
          this.currentTechno++;
        }
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
