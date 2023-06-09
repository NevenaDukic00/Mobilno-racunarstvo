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
  messagesuccess:boolean = false;
  messagedanger:boolean = false;
  messageTextsuccess:string = "";
  messageTextdanger:string = "";

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
            this.messageTextsuccess = "You have been successfully registered!";
            this.registrationForm.reset();
            this.messagesuccess = true;
           // this.clearForm();
          }else if(res.email==null){
            this.messageTextdanger = "The password must have at least 5 characters!";
            this.messagedanger = true;
          }else{
            this.messageTextdanger = "The email has already been taken!";
            this.messagedanger = true;
          }
         
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
    this.messagedanger = false;
    this.messagesuccess = false;
    console.log("Poruka nestaje!");
  }
}
