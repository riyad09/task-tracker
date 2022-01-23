import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:5000/tasks'

  constructor(private http : HttpClient) { }

  getTask(): Observable <Task[]> {
    return this.http.get<Task[]>(this.url)
  }
}
