import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css'],
})
export class NoCommonsComponent implements OnInit {
  // i18nSelect
  name: string = 'Andrés';
  gender: string = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  clients: string[] = ['Maria', 'Pedro', 'Juan', 'John', 'Susan'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  // KeyValue Pipe
  person = {
    name: 'Andres',
    age: 27,
    direction: 'La Paz, Bolivia',
  };

  // Json Pipe
  heroes = [
    { nombre: 'Superman', fly: true },
    { nombre: 'Robin', fly: false },
    { nombre: 'Aquaman', fly: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  changePerson(): void {
    this.name = this.name === 'Andrés' ? 'María' : 'Andrés';
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }

  deleteClient(): void {
    this.clients.pop();
  }
}
