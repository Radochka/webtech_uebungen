import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../shared/backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Member} from "../shared/member";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  member: Member
  form: FormGroup
  constructor(private bs: BackendService,
              private fb: FormBuilder,
              private route:ActivatedRoute,
              private location: Location,
              private router: Router
  ) {
    this.form = this.fb.group(
      {
        forenameControl: ['', Validators.required],
        surnameControl: ['', Validators.required],
        emailControl: ['', Validators.required]
      }
    )
    this.member = {_id: '', forename: '', surname: '', email: ''}
  }

  ngOnInit(): void {
  }

  create(): void {

    const values = this.form.value
    this.member.forename = values.forenameControl
    this.member.surname = values.surnameControl
    this.member.email = values.emailControl

    this.bs.create(this.member).subscribe(
        response => console.log(response),
        error => console.log(error))
    this.router.navigateByUrl('/table');
  }
  cancel(): void {
    this.location.back();
  }
}
