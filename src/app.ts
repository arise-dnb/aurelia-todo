import {Todo} from './todo';

export class App {
  public message: string;
  public todoList: Todo[];
  public newItem: string;

  constructor() {
    this.message = 'Hello World!';
    this.todoList = [];
    this.todoList.push(new Todo('Clean my room'));
    this.todoList.push(new Todo('Learn Aurelia'));
    this.todoList.push(new Todo('Finish work'));
    this.newItem = '';
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem = '';
  }

  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }
}
