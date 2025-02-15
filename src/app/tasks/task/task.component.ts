import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  constructor(private tasksService: TasksService) {}
  @Input({ required: true }) task!: Task;

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }
}
