import { Component } from '@angular/core';

import { RosterPage } from '../roster/roster';
import { NotificationPage } from '../notification/notification';
import { MyInfoPage } from '../my-info/my-info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RosterPage;
  tab2Root: any = NotificationPage;
  tab3Root: any = MyInfoPage;

  constructor() {

  }
}
