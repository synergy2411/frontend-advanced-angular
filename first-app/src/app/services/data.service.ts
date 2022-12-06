import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserData(): Observable<IUser[]> {
    // this.http.post("", {})
    return this.http.get<IUser[]>("http://localhost:3000/users")
  }

}
