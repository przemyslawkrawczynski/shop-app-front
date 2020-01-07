import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { OrderRestService, OrderDto } from '../services/order-rest.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Array<OrderDto>;

  constructor(private orderService: OrderRestService, private router: Router) {

  }

  ngOnInit() {
    this.getData();
  }



  getData() {
    this.orders = new Array();
    let data = this.orderService.getAllUserOrders();
    data.subscribe(response => {
      this.orders = response;
    });

  }
}


