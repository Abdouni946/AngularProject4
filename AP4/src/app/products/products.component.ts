import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../services/products.service";
import {Product} from "../model/product.model";
import {FormsModule} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit{

  public products : Array<Product> = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(){
    this.productsService.getProducts()
      .subscribe({
        next : data => {
          this.products = data
          console.log(data)
        },
        error : err => {
          console.error(err)
        }
      })
  }

  handleCheckProduct(product: Product)  {
    this.productsService.checkProduct(product)
      .subscribe({
        next : updateProduct => {
          product.check = !product.check
        }
      })

  }

  handleDeleteProduct(product: Product) {
    if(confirm("Are you sure you want to delete this product?"))
      this.productsService.deleteProduct(product)
  .subscribe({
        next : value => {
          this.products = this.products.filter(p => p.id !== product.id)
        }
      })
  }

  searchProducts() {
    this.productsService.searchProducts(this.keyword).subscribe({
        next : value => {
          this.products = value;
        }
      })
  }

}
