import { Component, ViewChild } from '@angular/core';
import * as Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';

@Component({
  selector: 'my-app',
  template: `
    <hot-table
      [data]="dataset"
      [colHeaders]="true"
      [rowHeaders]="true"
      [settings]="hotSettings"
      [hotId]="id"
      licenseKey="non-commercial-and-evaluation"
    >
      <hot-column data="id" [readOnly]="true" title="id"></hot-column>
      <hot-column data="name" title="Movie title"></hot-column>
      <hot-column data="address" title="Description"></hot-column>
    </hot-table>
    <br>
     
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hotRegisterer = new HotTableRegisterer();
  hotSettings: Handsontable.GridSettings = {
    startRows: 5,
    startCols: 5,
    width: '100%',
    colHeaders: true,
    stretchH: 'all',
    height: 'auto',
    manualColumnMove: true,
    persistentState: true,
    rowHeaders: true,
    licenseKey: 'non-commercial-and-evaluation'
  };
  id = 'my-custom-id';

  dataset: any[] = [
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 9, name: 'Ted Right', address: 'Wall Street' },
    { id: 10, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 11, name: 'Joan Well', address: 'Broadway' },
    { id: 12, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 13, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 14, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 15, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 16, name: 'Jack Right', address: 'Michigan Avenue' },
    { id: 17, name: 'Ted Right', address: 'Wall Street' },
    { id: 18, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 19, name: 'Joan Well', address: 'Broadway' },
    { id: 20, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 21, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 22, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 23, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 24, name: 'Jack Right', address: 'Michigan Avenue' }
  ];


}
