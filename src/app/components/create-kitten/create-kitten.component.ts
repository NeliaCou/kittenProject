import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../../models/list-kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})
export class CreateKittenComponent {

  // transmet un événement avec les données du nouveau chat une fois qu'il est créé
  @Output() kittenCreated: EventEmitter<Kitten> = new EventEmitter<Kitten>();
 
  newKitten: Kitten = {
    name: "",
    breed: "",
    birthday: "",
    image: ""
    }


  creatKitten(){
    this.kittenCreated.emit(this.newKitten);
    this.newKitten = {
      name: "",
      breed: "",
      birthday: "",
      image: ""
    };
  }
}
