import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  isLinear = false;
  firstFormGroup = FormGroup;
  secondFormGroup = FormGroup;
  thirdFormGroup = FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
