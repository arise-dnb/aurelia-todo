import {Todo} from './todo';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-framework';

export class App {
  public message: string;
  public todoList: Todo[];
  public newItem: string;

  router: Router;

  constructor() {
    this.message = 'Hello World!';
    this.todoList = [];
    this.todoList.push(new Todo('Clean my room'));
    this.todoList.push(new Todo('Learn Aurelia'));
    this.todoList.push(new Todo('Finish work'));
    this.newItem = '';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Router Test';
    config.map([
      {route: '', name: 'home', moduleId: PLATFORM.moduleName('index'), title: 'Home'}
    ]);
  }

  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    this.newItem = '';
  }

  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }


}

/**
import {Router, RouterConfiguration} from 'aurelia-router';
import {inject, PLATFORM} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '',              moduleId: PLATFORM.moduleName('no-selection'),   title: 'Select' },
      { route: 'contacts/:id',  moduleId: PLATFORM.moduleName('contact-detail'), name:'contacts' }
    ]);

    this.router = router;
  }
}
 **/
