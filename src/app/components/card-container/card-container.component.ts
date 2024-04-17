import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../../models/list-kitten.model';


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
  @Input() kittenToChildren?: Kitten;
  
  showKittenInfo = false;
  
     @Output() kittenCreated: EventEmitter<Kitten> = new EventEmitter<Kitten>();

     addKittenToList(): void{
      
       this.kittenCreated.emit(this.kittenToChildren);
  
      }
      toggleKittenInfo(): void{
       this.showKittenInfo =!this.showKittenInfo
    }
}
