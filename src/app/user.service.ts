import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL: string = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

// public createCustomer(customer: Customer){}

// public updateCustomer(customer: Customer){}

// public deleteCustomer(id: number){}

// public getCustomerById(id: number){}

public getCustomers(){
  return this.httpClient.get<Customer[]>(`${this.apiURL}/customers`);
}

public getCustomerById(id: number){
  return this.httpClient.get(`${this.apiURL}/customers/${id}`);
}

public createCustomer(customer: Customer){
  return this.httpClient.post(`${this.apiURL}/customers/`,customer);
}


public updateCustomer(customer: Customer){
  return this.httpClient.put(`${this.apiURL}/customers/${customer.id}`,customer);
}

public deleteCustomer(id: number){
  return this.httpClient.delete(`${this.apiURL}/customers/${id}`);
}

//public getCustomers(url?: string){}


}




