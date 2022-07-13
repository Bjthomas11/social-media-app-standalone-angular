import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pin-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pin-detail.component.html',
  styleUrls: ['./pin-detail.component.css']
})
export class PinDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
