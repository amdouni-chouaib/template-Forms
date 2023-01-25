import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  user={
    email:"",
    password:""
  }
  constructor() {  }
      sub(hey:NgForm){
        this.user.email=hey.value.email
        this.user.password=hey.value.password
        console.log(hey.value)
      }
      
  
  

}

