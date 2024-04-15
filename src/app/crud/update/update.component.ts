import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  user!:User;

  constructor(private service:UserServiceService,private routes:Router){}

  ngOnInit(): void {
    this.user=history.state.user
    console.log(this.user)
  }

  updateUser() {
    this.service.updateUser(this.user.id,this.user).subscribe((data)=>{
      console.log(data);

      this.routes.navigate(['/getlist'],{ state: { data } });
    });
    

    }



}
