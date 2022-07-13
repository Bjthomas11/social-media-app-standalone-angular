import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

// const spinner = require('../../../assets/tailwind/spinner.svg');

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;
  // spinner = spinner;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {}
}
