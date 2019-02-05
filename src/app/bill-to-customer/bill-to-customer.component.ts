import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-to-customer',
  templateUrl: './bill-to-customer.component.html',
  styleUrls: ['./bill-to-customer.component.css']
})
export class BillToCustomerComponent implements OnInit {

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
