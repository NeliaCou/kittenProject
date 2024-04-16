import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrl: './user-kitten.component.css'
})
export class UserKittenComponent {

  @Input() kittenNames: string[] = [];
  
  

}
