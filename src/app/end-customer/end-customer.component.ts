import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-customer',
  templateUrl: './end-customer.component.html',
  styleUrls: ['./end-customer.component.css']
})
export class EndCustomerComponent implements OnInit {
  editMode = 'card-body';
  showEditMode = false;

  constructor() { }

  ngOnInit() {
  }

  editPanel() {
    this.editMode = 'edit-card-body';
    this.showEditMode = true;
  }

  editPanelClose() {
    this.editMode = 'card-body';
    this.showEditMode = false;
  }

}
