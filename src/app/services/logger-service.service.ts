import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {
  allLogs: string[] = [];
  showLog(log: string) {
    console.log(log);
    this.allLogs.push(log);
  }
  showAllLogs() {
    console.log(this.allLogs);
  }
}
