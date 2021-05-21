import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'http://localhost:3000/users/';

  getAllUsers():Observable<any>{
    return this.httpClient.get(this.apiUrl);
  }

  postUser(user: any){
    return this.httpClient.post(this.apiUrl, user)
  }

  update(id:any, data:any): Observable<any> {
    return this.httpClient.patch(this.apiUrl + id, data);
  }

  deleteUser(id:any){
    return this.httpClient.delete(this.apiUrl + id)
  }

  getUserById(id: any):Observable<any>{
    return this.httpClient.get(this.apiUrl + id)
  }
}
