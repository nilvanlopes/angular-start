import { Component, OnInit } from '@angular/core';
import { LoggerServiceService } from '../services/logger-service.service';

@Component({
  selector: 'app-ninth-component',
  templateUrl: './ninth-component.component.html',
  styleUrls: ['./ninth-component.component.css']
})
export class NinthComponentComponent{
  item = "";

  constructor(private log:LoggerServiceService) {}

  addItem() {
    this.log.showLog(`Added ${this.item} to the list`);
  }

  showAddedItens() {
    this.log.showAllLogs();
  }
}
