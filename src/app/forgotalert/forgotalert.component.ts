import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotalert',
  templateUrl: './forgotalert.component.html',
  styleUrls: ['./forgotalert.component.css']
})
export class ForgotalertComponent implements OnInit {

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
