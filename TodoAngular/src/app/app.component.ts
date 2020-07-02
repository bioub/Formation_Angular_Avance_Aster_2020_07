import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  public todos = (new Array(3000)).fill('').map((el, i) => `Item ${i+1}`);

  public handleNewTodo(todo) {
    // Changement immuable sur le tableau
    // pour faire le changement je créé un nouvel objet (tableau)
    this.todos = [todo, ...this.todos];

    // Changement muable (met à jour l'objet)
    // this.todos.push(todo);

    // deepEqual
  }

  ngOnInit(): void {
    setInterval(() => {
      console.log('5s');
    }, 5000);
  }

  ngDoCheck(): void {
    console.log('AppComponent checked');
  }
}
