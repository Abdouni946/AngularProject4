import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {ProductsService} from "../services/products.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{

  public productForm! : FormGroup

  constructor(private fb: FormBuilder , private productService: ProductsService){
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control(''),
      price: this.fb.control(''),
      check : this.fb.control(false)
    })
    }

  saveProduct() {
    let product:Product = this.productForm.value
    console.log(product)
    this.productService.saveProduct(product).subscribe(
      {
        next : data => {
         alert(JSON.stringify(data))
        },
        error: error => {
          alert(JSON.stringify(error))
        }
      }
    )
  }
}

