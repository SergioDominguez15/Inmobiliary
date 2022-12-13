import * as moment from 'moment-timezone';

import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private _assignments:Assignment[] = [
    {
      id:1,
      personId:1,
      taskId:1,
      createdAt:moment().toISOString(),
      dateTime:moment().toISOString(),
    },
    {
        id:2,
        personId:2,
        taskId:2,
        createdAt:moment().toISOString(),
        dateTime:moment().add(1,'days').toISOString(),
      },
      {
        id:3,
        personId:3,
        taskId:3,
        createdAt:moment().toISOString(),
        dateTime:moment().toISOString(),
      },
      {
        id:4,
        personId:4,
        taskId:4,
        createdAt:moment().toISOString(),
        dateTime:moment().toISOString(),
      },
      {
        id:5,
        personId:5,
        taskId:5,
        createdAt:moment().toISOString(),
        dateTime:moment().toISOString(),
      }
  ];

  private _assignmentsSubject:BehaviorSubject<Assignment[]> = new BehaviorSubject(this._assignments);
  public assignments$ = this._assignmentsSubject.asObservable();


  id:number = this._assignments.length+1;
  constructor() {

  }

  getAssignments(){
    
    return this._assignments;
  }

  getAssignmentById(id:number){
    return this._assignments.find(a=>a.id==id);
  }

  getAssignmentsByTaskId(taskId:number):Assignment[]{
    return this._assignments.filter(a=>a.taskId == taskId);
  }

  getAssignmentsByPersonId(personId:number):Assignment[]{
    return this._assignments.filter(a=>a.personId == personId);
  }

  deleteAssignmentById(id:number){
    this._assignments = this._assignments.filter(a=>a.id != id); 
    this._assignmentsSubject.next(this._assignments);
  }

  addAssignment(assingment:Assignment){
    assingment.id = this.id++;
    this._assignments.push(assingment);
    this._assignmentsSubject.next(this._assignments);
  }

  updateAssignment(assignment:Assignment){
    var _assignment = this._assignments.find(a=>a.id==assignment.id);
    if(_assignment){
      _assignment.taskId = assignment.taskId;
      _assignment.personId = assignment.personId;
      _assignment.createdAt = assignment.createdAt;
      _assignment.dateTime = assignment.dateTime;
    }
    this._assignmentsSubject.next(this._assignments);
    
  }
}
