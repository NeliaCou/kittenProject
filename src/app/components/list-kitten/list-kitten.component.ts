import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Kitten } from '../../models/list-kitten.model';



@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css'
})
export class ListKittenComponent {

    @Input() newKittens: Kitten[] = [];


    @Output() kittenAdopted: EventEmitter<Kitten> = new EventEmitter<Kitten>();

    addKittenToParent(kitten: Kitten): void {
      this.removeKittenFromList(kitten);
      this.kittenAdopted.emit(kitten);
    }

    removeKittenFromList(kitten: Kitten): void {
      this.newKittens = this.newKittens.filter(k => k !== kitten);
    }
    
  }
