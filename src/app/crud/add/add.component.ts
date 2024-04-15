import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: User = new User();

  ngOnInit(): void {

  }

  constructor(private userservice: UserServiceService,private routes:Router) { }

  save() {
    this.userservice.addUser(this.user).subscribe(data => { 
      console.log(data);
      this.routes.navigate(['/getlist']);
     }, error => console.log(error));

  }

  onSubmit() {
    console.log(this.user);
    this.save();
  }

}
