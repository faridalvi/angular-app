import {ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Subject, takeUntil, mergeMap, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Form!:FormGroup
  private _unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
  constructor(private _changeDetectorRef: ChangeDetectorRef,private formBuilder: FormBuilder,private apiService: AuthService,private ngZone: NgZone, private router: Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    })
    // Mark for check
    this._changeDetectorRef.markForCheck();
    console.warn('Register')
  }
  //Login
  register(){
    if (this.Form.valid) {
      this.apiService.postrRgister(this.Form.value)
        .subscribe({
          next: (res) => {
            console.log(res);
          }, error: (err) => {
            console.log(err);
          }
        })
      // Mark for check
      this._changeDetectorRef.markForCheck();
    }
  }
}
