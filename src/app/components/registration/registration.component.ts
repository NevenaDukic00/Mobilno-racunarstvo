import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm: FormGroup;
  message:boolean = false;
  messageText:string = "";

  constructor(public fb:FormBuilder,private authService:AuthService,private router: Router){
    this.registrationForm = fb.group(
      {
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],}
      )
  }
  get emailFormControl(){
    // console.log(this.loginForm.get('email')as FormControl);
    return this.registrationForm.get('email')as FormControl;
  }

  get passwordFormControl(){
    // console.log(this.loginForm.get('password')as FormControl);
    return this.registrationForm.get('password')as FormControl;
  }
  get firstNameFormControl(){
    // console.log(this.loginForm.get('password')as FormControl);
    return this.registrationForm.get('firstName')as FormControl;
  }
  get lastNameFormControl(){
    // console.log(this.loginForm.get('password')as FormControl);
    return this.registrationForm.get('lastName')as FormControl;
  }
  onSubmit(){
   
    if(this.registrationForm.valid){
      console.log(this.registrationForm);
      this.authService.register(this.registrationForm.value).subscribe(
        (res)=>{
          console.log(res);
          if(res.response=="success"){
            alert("Uspesno");
            this.messageText = "You have been successfully registered!";
            this.registrationForm.reset();
           // this.clearForm();
          }else{
            this.messageText = "The password must have at least 5 characters!";
            
          }
          this.message = true;

        });
    }
   

    console.log(this.registrationForm.value);
  }
  clearForm() {

    this.registrationForm.reset({
          'email': '',
          'password': '',
          'firstName': '',
          'lastName': ''
         });
    }
  public removeMessage(){
    this.message = false;
    console.log("Poruka nestaje!");
  }
}
