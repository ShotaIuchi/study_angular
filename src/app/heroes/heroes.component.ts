import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(it => {
      this.heroes = it
    })
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
