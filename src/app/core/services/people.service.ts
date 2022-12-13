import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService{

  private _people:Person[] = [
    {
      id:1,
      name:"Sergio",
      surname:"Dominguez",
      tlf:"693463767",
      picture:"../assets/fotospeople/SergioD.png"
    },
    {
      id:2,
      name:"Alvaro",
      surname:"Linero",
      tlf:"693464777",
      picture:"../assets/fotospeople/AlvaroL.jpg"
    },
    {
      id:3,
      name:"Diego",
      surname:"Rodriguez",
      tlf:"693463788",
      picture:"../assets/fotospeople/DiegoR.jpg"
    },
    {
      id:4,
      name:"Alejandro",
      surname:"Cueto",
      tlf:"693463700",
      picture:"../assets/fotospeople/Cueto.jpg"
    },
    {
      id:5,
      name:"Alberto",
      surname:"Parra",
      tlf:"693463755",
      picture:"../assets/fotospeople/Parra.jpg"
    },
    {
      id:6,
      name:"Sergio",
      surname:"Morales",
      tlf:"69346444",
      picture:"../assets/fotospeople/SergioM.jpg"
    },
    {
      id:7,
      name:"Diego",
      surname:"Aguilera",
      tlf:"693463000",
      picture:"../assets/fotospeople/DiegoA.jpeg"
    },
    {
      id:8,
      name:"Jose",
      surname:"Benitez",
      tlf:"693463765",
      picture:"../assets/fotospeople/JoseB.jpeg"
    }
  ];

  private _peopleSubject:BehaviorSubject<Person[]> = new BehaviorSubject(this._people);
  public _people$ = this._peopleSubject.asObservable();
  
  id:number = this._people.length+1;
  constructor() {

  }
  

  getPeople(){
    return this._people;
  }

  getPersonById(id:number){
    return this._people.find(p=>p.id==id);
  }

  deletePersonById(id:number){
    this._people = this._people.filter(p=>p.id != id); 
    this._peopleSubject.next(this._people);
  }

  addPerson(person:Person){
    person.id = this.id++;
    this._people.push(person);
    this._peopleSubject.next(this._people);
  }

  updatePerson(person:Person){
    var _person = this._people.find(p=>p.id==person.id);
    if(_person){
      _person.name = person.name;
      _person.surname = person.surname;
      _person.tlf = person.tlf;
      _person.picture = person.picture;
      this._peopleSubject.next(this._people);
    }    
  }
}
