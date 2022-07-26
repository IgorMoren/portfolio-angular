import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  host: { class: 'content-blocks photo' },
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css'],
})
export class PhotographyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
