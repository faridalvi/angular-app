import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { map, Subject, takeUntil, mergeMap, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

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
  constructor(private _changeDetectorRef: ChangeDetectorRef,private formBuilder: FormBuilder,private apiService: AuthService,private ngZone: NgZone, private router: Router) { }

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
    if (this.Form.valid) {
      this.apiService.postLogin(this.Form.value)
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
