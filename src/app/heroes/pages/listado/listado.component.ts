import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private HeroesService:HeroesService) { }

  ngOnInit(): void {

    this.HeroesService.getHeroes()
      .subscribe(resp => console.log(resp));
     

  }

}
