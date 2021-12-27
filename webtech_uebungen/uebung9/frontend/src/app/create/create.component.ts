import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormGroup} from "@angular/forms";
/*import {Member} from "../shared/member";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../shared/backend.service";*/

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup
  constructor( private location: Location) {  }

  ngOnInit(): void {
  }

  create(): void {
    console.log('created!')
  }

  addNewMember(): void{

  }

  cancel(): void {
    this.location.back();
  }
}
