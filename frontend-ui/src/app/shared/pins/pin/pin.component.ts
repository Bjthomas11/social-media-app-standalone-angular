import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
