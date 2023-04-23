import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  loginForm: FormGroup;


  constructor(public fb:FormBuilder,private authService:AuthService,private router: Router){
    this.loginForm = fb.group(
      {
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]],}
      )
  }
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
      this.authService.login(this.loginForm.value).subscribe(
        (res)=>{
          this.authService.setSessionData(res);
          if(this.authService.getUserStatus()=="admin"){
            this.router.navigate(['/home']);
          }else if(this.authService.getUserStatus()=="user"){
            this.router.navigate(['/home']);
          }
        });
    }
   

    console.log(this.loginForm.value);
  }

  
}
