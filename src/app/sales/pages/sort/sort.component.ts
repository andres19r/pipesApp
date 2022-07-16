import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
})
export class SortComponent implements OnInit {
  inUpper: boolean = true;
  heroes: Hero[] = [
    { name: 'Superman', fly: true, color: Color.blue },
    { name: 'Batman', fly: false, color: Color.black },
    { name: 'Robin', fly: false, color: Color.green },
    { name: 'Daredevil', fly: false, color: Color.red },
    { name: 'Green Lantern', fly: true, color: Color.green },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleUpper(): void {
    this.inUpper = !this.inUpper;
  }
}
