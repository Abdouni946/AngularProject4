import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) {

  }
  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>("http://localhost:8089/products")
  }

  public checkProduct(product: Product) {
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`,
          {check: !product.check})
  }

  public deleteProduct(product: Product) {
    return this.http.delete<Product>(`http://localhost:8089/products/${product.id}`)
  }

  public saveProduct(product: Product) {
    return this.http.post <Product>("http://localhost:8089/products", product)

  }

  public searchProducts(keyword :string): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`);
  }
}
