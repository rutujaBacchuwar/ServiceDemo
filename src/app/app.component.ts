import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

 

  constructor(private userService: UserService){
  
  }
   customer = {
    "id": 1,
    "firstName": "First name",
    "lastName": "Last name",
    "email": "name@email.com",
    "phone": "(+91) 1234567890",
    "city":"Bangalore"
  }
  ngOnInit(){
    this.userService.getCustomers().subscribe((res)=>{
   
        console.log(res.body);
  
    });


this.userService.createCustomer(this.customer).subscribe((res)=>{
  console.log("Created a customer");
});


this.userService.updateCustomer(this.customer).subscribe((res)=>{
  console.log("Updated the customer");
});


this.userService.deleteCustomer(1).subscribe((res)=>{
  console.log("Deleted a customer");
});




}
}