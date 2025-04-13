declare var bryntum : any;

import { AfterViewInit, Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    bryntum.gantt.GanttProjectModel.loadInlineData({
      startDate: '2025-04-01',
      tasksData: [
        { id: 1, name: 'Task 1', startDate: '2025-04-01', duration: 5 },
        { id: 2, name: 'Task 2', startDate: '2025-04-07', duration: 3 }
      ],
      dependenciesData: [{ fromTask: 1, toTask: 2 }]
    });

    new bryntum.gantt.Gantt({
      
      appendTo: 'gantt-container',
      project: new bryntum.gantt.ProjectModel({
        startDate: '2025-04-01'
      }),
      columns: [
        { type: 'name', field: 'name', text: 'Task Name', width: 250 }
      ]
    });
  }

}

