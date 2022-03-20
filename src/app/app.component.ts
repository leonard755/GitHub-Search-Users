import { Component } from '@angular/core';
import { first } from 'rxjs';
import { RequestService } from './_services/request.service';
import { map, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag:boolean = false;
  title = 'Git-Hub Search';
  arr_users:Array<any> = []
  constructor(
    private API: RequestService,
  ){
    this.getUsers();
  }
  
  getUsers(){
    this.API.reqGET("?/per_page=10")
    .pipe(first())
    .subscribe(res => {
      this.arr_users = res
    })
  }

  searchUser(value:string){
    if(value === ''){
      this.flag = false,
      this.getUsers()
    }else{
      this.arr_users = []
      this.API.reqGET(`/${value}`)
      .pipe(first())
      .subscribe(res => {
        this.arr_users.push(res)
    },
    err => {
      this.flag = true,
      console.log("ooooh sanp: ", err)
    } )
    }
  }

  goToPerfil(data:any){
    window.open(data.html_url, '_blank');
  }

}




