import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/Employee';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private api1="http://localhost:8080/api/register";
  private api2="http://localhost:8080/api/getEmployees";
  constructor(private _http: HttpClient) { }
  
  registerEmployee(employee)
  {
    console.log(employee)
    return this._http.post(this.api1, employee, {headers: new HttpHeaders({'Content-Type': 'application/json'}),
                                                                        responseType: 'text' as 'json'}).
                                                                        subscribe(data=>{
                                                                          console.log(data)
                                                                        })
  }

  getAllEmployees()
  {
    return this._http.get(this.api2);
  }
}
