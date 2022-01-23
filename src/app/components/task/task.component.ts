import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import {TaskService} from '../../services/task.service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

}
