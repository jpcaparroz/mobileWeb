import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  public AlertController: AlertController;

  constructor() { }

  ngOnInit() {
  }

}
