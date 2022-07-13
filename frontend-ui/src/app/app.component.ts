import { Component, OnInit } from '@angular/core';
import { CategoryService } from './core/services/category/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'social-media-app';

  constructor() {}

  ngOnInit(): void {
    // this.catService.getCategories().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
