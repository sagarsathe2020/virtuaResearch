import { Component, OnInit } from '@angular/core';
import { DeveloperModel } from '../models/developer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showAddUpdateDeveloperForm: boolean = false;
  selectedDeveloper: DeveloperModel = new DeveloperModel();
  isUpdate: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  

}
