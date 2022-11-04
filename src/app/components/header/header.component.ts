import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  departamentos: boolean = false;
  politicas: boolean = false;
  minhaConta: boolean = false;

  showMinhaConta(){
    if(this.minhaConta){
      this.minhaConta = false;
    }else{
      this.minhaConta = true;
      this.politicas = false;
      this.departamentos = false;
    }
  }

  showPoliticas(){
    if(this.politicas){
      this.politicas = false;
    }else{
      this.politicas = true;
      this.minhaConta = false;
      this.departamentos = false;
    }
  }

  showDepartamentos(){
    if(this.departamentos){
      this.departamentos = false;
    }else{
      this.departamentos = true;
      this.minhaConta = false;
      this.politicas = false;
    }
  }

  ngOnInit(): void {
    const sidenav = document.querySelectorAll('.sidenav');
    const options = {};
    M.Sidenav.init(sidenav, options);
  }

}
