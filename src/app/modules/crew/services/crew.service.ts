import { Injectable } from '@angular/core';
import { Crew } from '../interfaces/crew';

@Injectable({
  providedIn: 'root',
})
export class CrewService {
  crew: Crew[] = [
    {
      position: 'Commander ',
      name: 'Douglas Hurley',
      info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      img: 'assets/images/crew/image-douglas-hurley.png',
    },
    {
      position: 'Mission Specialist  ',
      name: 'MARK SHUTTLEWORTH',
      info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      img: 'assets/images/crew/image-mark-shuttleworth.png',
    },
    {
      position: 'PILOT ',
      name: 'Victor Glover',
      info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      img: 'assets/images/crew/image-victor-glover.png',
    },
    {
      position: 'Flight Engineer ',
      name: 'Anousheh Ansari',
      info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      img: 'assets/images/crew/image-anousheh-ansari.png',
    },
  ];
  constructor() {}
}
