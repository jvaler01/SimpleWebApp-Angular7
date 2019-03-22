import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 heroes: any[] = [];
 termino: string = '';
  constructor( private activatedRoute: ActivatedRoute,
               private heroesServices: HeroesService,
               private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this.heroesServices.buscarHeroes(params.termino);
      this.termino = params.termino;
    });
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
