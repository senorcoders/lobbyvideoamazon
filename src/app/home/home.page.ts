import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  code:any = "CODE";
  constructor(private rest: RestService,
    private router: Router) {
  }

  ionViewDidEnter(){
    this.getCode();

  }


  async getCode(){
    this.code = localStorage.getItem('code');
    console.log("Current Code: ", this.code);
    if (this.code.length > 0){
      this.loginWithCode();
    } else {
      this.rest.get('api/v1/code').subscribe(res => {
        console.log("Code", res);
        this.code = res;
      
      });
    }
  }


  loginWithCode(){
    this.rest.getData('api/v1/logincode/' + this.code).subscribe(res => {
      console.log("Res", res);
      localStorage.setItem("code", this.code);
      this.goToLobby();
    })
  }

  goToLobby(){
    this.router.navigate(['lobby']);

  }
}
