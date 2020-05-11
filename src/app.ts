import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-framework';

require('./styles.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

export class App {
  public message: string;

  router: Router;

  constructor() {
    this.message = 'Learning Aurelia';
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Router Test';
    config.map([
      {route: '', name: 'home', moduleId: PLATFORM.moduleName('index'), title: 'Home'},
      {route: 'todo', name: 'todo', moduleId: PLATFORM.moduleName('task-planner'), title: 'ToDo-List'},
      {route: 'about', name: 'about', moduleId: PLATFORM.moduleName('about'), title: 'About Me'},
      {route: 'post/:slug', name: 'post', moduleId: PLATFORM.moduleName('post'), title: 'View Post'},
    ]);
  }

}
