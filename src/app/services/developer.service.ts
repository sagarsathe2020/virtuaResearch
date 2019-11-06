import { Injectable } from '@angular/core';
import { DeveloperModel } from '../models/developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  developers: Array<DeveloperModel> = [];

  constructor() { }

  getDevelopers(): Array<DeveloperModel> {
    return this.developers;
  }

  addDeveloper(developer: DeveloperModel) {
    developer.id = this.developers.length + 1;
    this.developers.push(developer);
  }

  updateDeveloper(developer: DeveloperModel) {
    let index = this.developers.findIndex((obj => obj.id == developer.id));
    if(index != -1) {
      this.developers[index].name = developer.name;
      this.developers[index].email = developer.email;
      this.developers[index].age = developer.age;
      this.developers[index].mobile = developer.mobile;
    }
    return this.developers;
  }

  deleteDeveloper(developer: DeveloperModel) {
    this.developers = this.developers.filter(d => d !== developer);
    return this.developers;
  }
}
