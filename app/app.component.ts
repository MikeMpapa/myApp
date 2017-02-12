import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <header>
          <nav class="navbar navbar-inverse" >
              <div class="navbar navbar-header">
              <a href="/" class="navbar-brand">My Angular 2 App!</a>
              </div>
          </nav>
      </header>

      <main>

          <div class="row">

              <div class="col-sm-4">


               <div *ngIf="users">
                  <ul class="list-group users-list" >
                     <li class="list-group-item"
                         *ngFor="let user of users">
                          {{user.name}}, ({{user.username}})
                     </li>
                  </ul>
              </div>

              </div>
              <div class="col-sm-8">

                  <div class="jumbotron">
                      <h1>Welcome to Our App!</h1>
                      <p>{{message}}</p>
                  </div>

              </div>
          </div>

          

         

      </main>




      <footer class="text-center">
          Copyright &copy; 2017
      </footer>


  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})


export class AppComponent {
    message = "Hello";
    users = [
    {id:1, name:'Michalis', username:'Papakostas'},
    {id:2, name:'Olga', username:'Alexaki'},
    {id:3, name:'Paris', username:'Christogeorgos'},
    {id:4, name:'Annoula', username:'Arguraki'}
    ];
}