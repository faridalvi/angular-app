import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

class NgToastService {
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Form!:FormGroup
  private _unsubscribeAll$: Subject<boolean> = new Subject<boolean>();
  constructor(private _changeDetectorRef: ChangeDetectorRef,private formBuilder: FormBuilder,private ngZone: NgZone, private router: Router) { }

  ngOnInit(): void {
    this.Form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    // Mark for check
    this._changeDetectorRef.markForCheck();
  }
  //Login
  login(){
    console.warn('login')
  }

}
