import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DeveloperModel } from '../models/developer.model';
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'app-add-update-popup',
  templateUrl: './add-update-popup.component.html',
  styleUrls: ['./add-update-popup.component.scss']
})
export class AddUpdatePopupComponent implements OnInit {
  @Input()
  developer: DeveloperModel = new DeveloperModel();
  
  name: string;
  age: number;
  mobile: string;
  email: string;
  id: number;

  @Input()
  isUpdate: boolean = false;

  @Output()
  cancelClicked = new EventEmitter<boolean>();

  @Output()
  onSubmit = new EventEmitter<DeveloperModel>();

  constructor( private developerService: DeveloperService ) { }

  ngOnInit() {
    //this.developer = new DeveloperModel();
    if(this.isUpdate) {
      this.name = this.developer.name;
      this.age = this.developer.age;
      this.mobile = this.developer.mobile;
      this.email= this.developer.email;
      this.id = this.developer.id;
    } else {
      this.name = this.mobile = this.email = '';
      this.age = this.id = null;
    }
  }

  cancel() {
    this.cancelClicked.emit(true);
  }

  submit() {
    this.developer = new DeveloperModel();
    this.developer.name = this.name;
    this.developer.age = this.age;
    this.developer.mobile = this.mobile;
    this.developer.email = this.email;
    if(this.isUpdate) {
      this.developer.id = this.id;
      this.developerService.updateDeveloper(this.developer);
    } else {
      this.developerService.addDeveloper(this.developer);
    }
    this.onSubmit.emit(this.developer);
  }
}
