import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()

export class DataService {

  private goals = new BehaviorSubject<any>(['Data Service sample in the busket','Busket is not basket!']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }

}
