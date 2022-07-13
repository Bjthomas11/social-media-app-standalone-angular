import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
