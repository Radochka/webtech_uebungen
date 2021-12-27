import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';
import { Member } from '../shared/member';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: string = '';
  member!: Member;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bs: BackendService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router
  )
  {
    this.form = this.fb.group(
      {
        forenameControl: ['', Validators.required],
        surnameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
  }

  readOne(id: string): void {
      this.bs.getOne(id).subscribe(
      (
        response: Member) => {
                this.member = response;
                this.form.patchValue({
                  forenameControl: this.member?.forename,
                  surnameControl: this.member?.surname,
                  emailControl: this.member?.email
                });
                console.log(this.member)
                return this.member;
        },
        error => console.log(error)
      );
  }

  update(): void {
    const values = this.form.value;
    this.member.forename = values.forenameControl;
    this.member.surname = values.surnameControl;
    this.member.email = values.emailControl;
    this.bs.update(this.id, this.member)
      .subscribe(
        response => {
          console.log(response);
          console.log(response._id);
        },
        error => {console.log(error)}
      );
    this.router.navigateByUrl('/table');
  }

  cancel(): void {
    this.location.back();
  }

}
