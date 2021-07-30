import { Component, ViewChild } from '@angular/core';
import * as Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'my-app',
  template: `
  <div class="hot">
    <hot-table [hotId]="id" [settings]="hotSettings"></hot-table>
  </div>
  <br>
  <button (click)="alertData()">Alert data</button>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private hotRegisterer = new HotTableRegisterer();
  id = 'hotInstance';
  hotSettings: Handsontable.GridSettings = {
    data: Handsontable.helper.createSpreadsheetData(6, 6),
    colHeaders: true
  };

  alertData() {
    let myData = this.hotRegisterer.getInstance(this.id).getData();
    alert(myData)
  }
}
