import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url:string="http://localhost:3000/employee/"
  constructor(private http:HttpClient) { }
  e:Employee={
    id: 0,
    name: '',
    uname: '',
    password: ''
  }

  getData():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  deleteData(id:number){
    return this.http.delete(this.url+id)
  }

  postData(emp:Employee){
    return this.http.post(this.url,emp)
  }

  updateData(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.url+emp.id,emp)
  }
}
