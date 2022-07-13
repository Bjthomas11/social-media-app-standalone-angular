import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-pin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create-pin.component.html',
  styleUrls: ['./create-pin.component.css']
})
export class CreatePinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
