// A Component controls a patch of screen real estate that we could call a view.
import { Component } from '@angular/core';

// The import statement tells the system it can get an AppComponent from a module named app.component located in a neighboring file. The module name (AKA module id) is often the same as the filename without its extension.
import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';


// It's not a component until we tell Angular about it.
// We tell Angular that Home is a component by attaching metadata to the class.
// To do so, we use the @Component decorator
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})

// The export statement tells TypeScript that this is a module whose AppComponent class is public and accessible to other modules of the application.
export class Home {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  // This is a LifeCycle hook
  // Initialize the directive/component after Angular initializes the data-bound input properties.
  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
