import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
  ]
})
export class SidenavComponent implements OnInit {

  constructor() { }

  departamentos: boolean = false;
  politicas: boolean = false;
  minhaConta: boolean = false;

  showMinhaConta(){
    if(this.minhaConta){
      this.minhaConta = false;
    }else{
      this.minhaConta = true;
    }
  }

  showPoliticas(){
    if(this.politicas){
      this.politicas = false;
    }else{
      this.politicas = true;
    }
  }

  showDepartamentos(){
    if(this.departamentos){
      this.departamentos = false;
    }else{
      this.departamentos = true;
    }
  }

  ngOnInit(): void {
  }

}
