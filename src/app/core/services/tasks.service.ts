import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/core/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _tasks:Task[] = [
    {
      id:1,
      name:"Palacio de Buckingham",
      durationInSecs:3600,
      picture:"../assets/casas/Buck.jpg",
      precio:60000000,
      Direccion:"En Buckingham",
    },
    {
      id:2,
      name:"Casa Milá",
      durationInSecs:5400,
      picture:"../assets/casas/mila.jpg",
      precio:40600000,
      Direccion:"Barcelona",
    },
    {
      id:3,
      name:"Choza los Asperones",
      durationInSecs:5400,
      picture:"../assets/casas/Aspe1.jpg",
      precio:50000,
      Direccion:"Malaga",
    },
    {
      id:4,
      name:"La Alambra",
      durationInSecs:5400,
      picture:"../assets/casas/Alha.jpg",
      precio:99909900,
      Direccion:"Granada",
    },
    {
      id:5,
      name:"Casa Blanca",
      durationInSecs:5400,
      picture:"../assets/casas/white.jpg",
      precio:89576875,
      Direccion:"washington D.C",
    },
    {
      id:6,
      name:"Palacio la Zarzuela",
      durationInSecs:5400,
      picture:"../assets/casas/Lazarzu.jpg",
      precio:25000000,
      Direccion:"Madrid",
    }
  ];

  private _tasksSubject:BehaviorSubject<Task[]> = new BehaviorSubject(this._tasks);
  public taks$ = this._tasksSubject.asObservable();

  

  id:number = this._tasks.length+1;
  constructor() {

  }

  getTasks(){
    return this._tasks;
  }

  getTaskById(id:number){
    return this._tasks.find(t=>t.id==id);
  }

  deleteTaskById(id:number){
    this._tasks = this._tasks.filter(t=>t.id != id); 
    this._tasksSubject.next(this._tasks);
  }

  addTask(task:Task){
    task.id = this.id++;
    this._tasks.push(task);
    this._tasksSubject.next(this._tasks);
  }

  updateTask(task:Task){
    var _task = this._tasks.find(t=>t.id==task.id);
    if(_task){
      _task.name = task.name;
      _task.durationInSecs = task.durationInSecs;
    }
    this._tasksSubject.next(this._tasks);
    
  }
}
