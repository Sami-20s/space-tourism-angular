import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyService } from './services/technology.service';
import { Technology } from './interfaces/technology';
import { TechnologyDetailsComponent } from './components/technology-details/technology-details.component';

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [CommonModule, TechnologyDetailsComponent],
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  selectedTechno: number = 0;
  constructor(private technologyService: TechnologyService) {}
  ngOnInit(): void {}
  selectTechno(techno) {
    this.selectedTechno = techno;
  }
  get getTechnologies(): Technology[] {
    return this.technologyService.technologies;
  }
}
