import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ComponentApp {
  constructor(private store: Store, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
