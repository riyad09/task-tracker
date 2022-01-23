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

  deleteTask(task: Task) {
    console.log('deleteTask');
    this.taskService.deleteTask(task).subscribe(()=> {this.tasks =  this.tasks.filter((t) => t.id !== task.id)})
  }
  toggleTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task: Task) {
    console.log('adding', task);
    this.taskService.addTask(task).subscribe(()=> {
      this.tasks.push(task)}
    );
  }

}
