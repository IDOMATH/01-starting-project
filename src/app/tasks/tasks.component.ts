import { Component, Input, Injectable } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

let maxId = 3;

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
@Injectable({ providedIn: 'root' })
export class TasksComponent {
  constructor(private tasksService: TasksService) {}
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }
  onStartAddTask() {
    this.tasksService;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
