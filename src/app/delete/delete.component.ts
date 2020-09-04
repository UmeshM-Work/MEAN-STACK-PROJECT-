import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public invalidcred=false;

  public fbFormGroup=this.fb.group({

  
    email : ['',Validators.required],
    pass : ['',Validators.required]
  });

  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

 



  async logout() {
    const data = this.fbFormGroup.value;
    console.log(data);
    const url = "http://localhost:3200/auth-user";
    const result : any=await this.http.post(url, data).toPromise();
    console.log(result);

    if (result.opr) {

    
      this.activeModal.dismiss();
      const url2 = "http://localhost:3200/delete";
      const result=await this.http.post(url2, data).toPromise();
      console.log(result);
     this.router.navigate(['login']);
     this.fbFormGroup.reset();

    }


    else {
     
      this.invalidcred = true;
      this.fbFormGroup.reset();

    }
  }
}