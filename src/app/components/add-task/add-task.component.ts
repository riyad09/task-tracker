import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean =  false;
  subscription: Subscription;
  startDate!: Date;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((val) => {this.showAddTask = val})

  }

  ngOnInit(): void {}
  inputEvent (event: any) {
    console.log(event.value);
  }

  changeEvent(ev: any) {
    console.log('test', ev);
  }

  onSubmit() {
    if (!this.text) {
      alert('Please enter a task name');
      return;
    }
    
    console.log('checking 123', this.startDate)

    const newTask = {
      id: new Date().getTime(),
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
  
    this.onAddTask.emit(newTask);
      this.text = '',
      this.day = '',
      this.reminder = false

  }

}


