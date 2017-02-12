import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})


export class AppComponent {
    message: string = "Hello";
    users: User[] = [
    {id:1, name:'Michalis', username:'Papakostas'},
    {id:2, name:'Olga', username:'Alexaki'},
    {id:3, name:'Paris', username:'Christogeorgos'},
    {id:4, name:'Annoula', username:'Arguraki'}
    ];

    activeUser: User;

    selectUser(user){
        this.activeUser=user;
        console.log(this.activeUser);
    }
}

