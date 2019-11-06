import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  @Output()
  addDeveloperClicked = new EventEmitter<boolean>();

  @Input()
  showAddButton: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addDeveloper() {
    this.addDeveloperClicked.emit( true );
  }
}
