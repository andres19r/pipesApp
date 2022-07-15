import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent implements OnInit {
  // i18nSelect
  name: string = 'Andrés'
  gender: string = 'male'
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  // i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Juan']
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
