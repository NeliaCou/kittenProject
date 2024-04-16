import { Component, OnInit } from '@angular/core';
import { Kitten } from './models/list-kitten.model';
import { kittenList } from './mocks/kittens.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kittenList: Kitten[] = kittenList;
  kittenNames: string[] = [];


  addKitten(kitten: Kitten): void {
    this.kittenList.push(kitten);
}

filterToUser(kitten : Kitten) : void {
  // Supprime le chaton adopté de la liste des chatons disponibles
  this.kittenList = this.kittenList.filter(kitty => kitty !== kitten);
  this.kittenNames.push(kitten.name);
}
}

