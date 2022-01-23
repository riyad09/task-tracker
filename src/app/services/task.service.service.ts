import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'http://localhost:5000/tasks'

  constructor(private http : HttpClient) { }

  getTask(): Observable <Task[]> {
    return this.http.get<Task[]>(this.url)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

}
