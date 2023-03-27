import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  formdata:any;
  id = "";
  data:any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.api.get("states").subscribe((result: any) => {
      this.data = result.data;
    });
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required]))
    })
  };

  edit(id: any) {
    this.id = id;
    this.api.get("states/" + id).subscribe((result: any) => {
      this.formdata= new FormGroup({
        name:new FormControl(result.data.name,Validators.compose([Validators.required])),
       })});
  }

  delete(id:any){
    swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("states/" + id).subscribe((result:any)=>{
          this.load()
        })
        swal.fire(
          'Deleted!',
         
        )
      }
    }) 
  };
  submit(data:any) {
      if (this.id != "") {
        this.api.put("states/" + this.id, data).subscribe((result: any) => { 
          if (result.status == "success") {
            this.load();  
          }
        })
      }
  
      else{
        this.api.post("states", data).subscribe((result: any) => {
          if (result.status == "success") {
            this.load();
          }
        })
      }
    }

    reset(){
      this.load();
    }
   }


