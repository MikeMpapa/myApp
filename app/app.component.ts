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
                         *ngFor="let user of users"
                         (click)="selectUser(user)"
                         [class.active]="user === activeUser">
                              {{user.name}}, ({{user.username}})
                     </li>
                  </ul>
              </div>

              </div>
              <div class="col-sm-8">

                  <div class="jumbotron" *ngIf="activeUser">
                      <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2> 
                  </div>

                  <div class="jumbotron" *ngIf="!activeUser">
                        <span class="glyphicon glyphicon-hand-left"></span>
                        <h2>Choose a User</h2>
                  </div>

              </div>
          </div>
      

      </main>




      <footer class="text-center">
          Copyright &copy; 2017
      </footer>


  `,
  styles: [`
        .users-list{
           cursor:pointer;   
        }
        .jumbotron .glyphicon{
            font-size: 80px;
        }
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

    activeUser;

    selectUser(user){
        this.activeUser=user;
        console.log(this.activeUser);
    }
}