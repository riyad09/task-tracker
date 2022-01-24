import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uniService: UiService, private router: Router) {
    this.subscription = this.uniService
      .onToggle()
      .subscribe((val) => { this.showAddTask = val })
  }

  ngOnInit(): void {
  }

  toggleAddText() {
    this.uniService.toggleAddTask();
  }

  hasRoute(route: string) {
    console.log('check', route)
    return this.router.url === route
  }

}
