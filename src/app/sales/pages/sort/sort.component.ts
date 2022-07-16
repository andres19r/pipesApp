import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  inUpper: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleUpper(): void {
    this.inUpper = !this.inUpper
  }
}
