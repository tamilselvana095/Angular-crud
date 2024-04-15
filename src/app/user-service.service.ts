import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private baseUrl="http://localhost:8080/api/users"

  constructor(private httpClient:HttpClient) { }

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/all`);
  }

  addUser(user:User):Observable<User>{
    return this.httpClient.post<User>(`${this.baseUrl}/add`,user);
  }

  updateUser(id:number,user:User):Observable<Object>{
    return this.httpClient.put<User>(`${this.baseUrl}/update/${id}`,user);
  }
  
  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
  }
}
