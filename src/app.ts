import {Todo} from './todo';

export class App {
  public message: string;
  public todo: Todo;

  constructor() {
    this.message = 'Hello World!';
    this.todo = new Todo('Clean my room');
  }

}
