import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent implements OnInit {
  name: string = 'Andrés'
  gender: string = 'male'
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
