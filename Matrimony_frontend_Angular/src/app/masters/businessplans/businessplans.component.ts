import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-businessplans',
  templateUrl: './businessplans.component.html',
  styleUrls: ['./businessplans.component.css']
})
export class BusinessplansComponent implements OnInit{

  formdata:any;
  datas:any = "";

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.load();
  }

  load(){

    this.api.get("businessplans").subscribe((result:any)=>{
      this.datas = result.data;
      // console.log(result);
    })

    this.formdata = new FormGroup({
      planname : new FormControl("",Validators.compose([Validators.required])),
      amount:new FormControl("",Validators.compose([Validators.required])),
      duration:new FormControl("",Validators.compose([Validators.required])),
      profileviews:new FormControl("",Validators.compose([Validators.required]))
    })

  }

  submit(data:any){

  }

  reset(){
    this.load();
  }

}
