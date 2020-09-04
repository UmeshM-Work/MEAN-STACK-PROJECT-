import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signupalert',
  templateUrl: './signupalert.component.html',
  styles: [
  ]
})
export class SignupalertComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
    private router: Router,) { }

  ngOnInit(): void {
  }

  closeTheModal() {
    this.activeModal.dismiss();
  }

  logout() {
    this.activeModal.dismiss();
 sessionStorage.removeItem('sid')
this.router.navigate(['login'])
  }

 
}