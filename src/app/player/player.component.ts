import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  @Input() name: string;
  @Input() playerActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
