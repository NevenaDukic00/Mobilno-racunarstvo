import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  loginForm: FormGroup;

  get emailFormControl(){
    // console.log(this.loginForm.get('email')as FormControl);
    return this.loginForm.get('email')as FormControl;
  }

  get passwordFormControl(){
    // console.log(this.loginForm.get('password')as FormControl);
    return this.loginForm.get('password')as FormControl;
  }

  onSubmit(){
   
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe((res)=>localStorage.setItem('token',res.access_token));
    }
   
    console.log(this.loginForm.value);
  }
  constructor(public fb:FormBuilder,private authService:AuthService){
    this.loginForm = fb.group(
      {
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],}
      )
  }
  
}
