import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  register : FormGroup;


  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      clave: ['', [Validators.required, Validators.minLength(4)]],
      nuevaClave: ['', [Validators.required]]
     });

  }

  ngOnInit(): void {
  }


  registrarUsuarios(): void {
    console.log(this.register);
  }

 

}
