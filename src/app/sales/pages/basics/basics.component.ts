import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  nameLower: string = 'andres'
  nameUpper: string = 'ANDRES'
  fullName: string = 'aNdReS riVEro'

  date: Date = new Date() // today's day

  constructor() { }

  ngOnInit(): void {
  }

}
