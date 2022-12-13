import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'About', url: '/folder/Home', icon: 'information-circle'},
    { title: 'Cliente', url: '/folder/People', icon: 'people' },
    { title: 'Casas', url: '/folder/Tasks', icon: 'home' },
    { title: 'Citas', url: '/folder/Assignments', icon: 'time' },
    { title: 'Calendario de Citas', url: '/folder/Task Panel', icon: 'calendar-number' },
  ];
  public labels = [];

  language = 1; // 0 español, 1 inglés
  constructor(
    private translate: TranslateService
  ) {
    this.translate. setDefaultLang('en');
  }
  onLanguage(){
    this.language = (this.language+1)%2;
    switch(this.language){
      case 0:
        this.translate.setDefaultLang('es');
        break;
      case 1:
        this.translate.setDefaultLang('en');
        break;
    }
  }
}
