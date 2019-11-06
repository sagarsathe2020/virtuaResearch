import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DeveloperModel } from "../models/developer.model";
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Output()
  updateClicked = new EventEmitter<DeveloperModel>();
  
  developers: Array<DeveloperModel> = [];
  selectedDeveloper: DeveloperModel;

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.getDevelopers()
  }

  getDevelopers(){
    this.developers = this.developerService.getDevelopers();
  }
  
  updateDeveloper(developer) {
    this.updateClicked.emit(developer);
  }

  deleteDeveloper(developer) {
    this.developers = this.developerService.deleteDeveloper(developer);
  }
}
