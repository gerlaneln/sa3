import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styles: [
  ]
})
export class ProductViewComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  openProduct(){
    this.router.navigate(['/product']);
  }

  ngOnInit(): void {
  }

}
