import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  users!: User[];
  id!:number;
  errorMessage: string = '';

  constructor(private userService: UserServiceService, private routes: Router) { }

  ngOnInit(): void {

    this.users = history.state.data;
    this.getUsers();
  }
  private getUsers() {
    this.userService.getUserList().subscribe(data => { this.users = data });
  }

  deleteUser(id: number) {
    console.log(id)
    this.userService.deleteUser(id).subscribe(() => {
      console.log("deleted successfully");
      this.getUsers();
    })
  }
  updateUser(user: User) {
    this.routes.navigate(['/update', user.id], { state: { user } });
  }

  search() {
    this.errorMessage = '';
    this.userService.getUserById(this.id).subscribe((data)=>{
      console.log(data);
      
        this.users=[data];
    },
    (error) => {
      this.users=[];
      console.error('Error fetching user:', error);
      this.errorMessage = 'Not found'; // Display a generic error message
    }
      
    );
    }
    


}
