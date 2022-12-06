import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  productId: string = '';
  productName: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(allParams => {
      console.log("[PARAMS]", allParams);
      this.productId = allParams['productId']
      this.productName = allParams['prodName']
    })
  }

}
