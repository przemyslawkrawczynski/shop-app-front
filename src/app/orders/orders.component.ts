import { Component, OnInit } from '@angular/core';
import { OrderRestService, OrderDto } from '../services/order-rest.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<OrderDto>;
  infoPanel: string = null;

  constructor(private orderService: OrderRestService) {

  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.orders = new Array();
    let data = this.orderService.getAllUserOrders(28);
    data.subscribe(response => {
      this.orders = response;
    });

  }
}


