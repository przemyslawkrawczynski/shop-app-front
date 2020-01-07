import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderRestService, OrderDto } from '../services/order-rest.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {

  orders: Array<OrderDto>;
  infoPanel: string = null;

  constructor(private orderService: OrderRestService, private router: Router) {

  }

  ngOnInit() {
    this.getData();
  }

  updateOrderStatus(form: NgForm, order: OrderDto) {

    let actualStatus = order.orderStatus;

    if (actualStatus === 'DELETED') {
      this.infoPanel = 'Nie można zmodyfikować anulowanego zamówienia';
    } else {
      const status = (form.form.value.status === 'Wysłano') ? 'SENDED' : 'DELETED';
      this.orderService.updateOrder(order.orderId, status).subscribe(
        orderAfterUpdate => {
          this.orders = orderAfterUpdate;
          this.infoPanel = 'Zmodyfikowano zamówienie.';
        },
        err => {
          this.infoPanel = 'Wystąpił błąd poczas modyfikacji zamówienia!';
        }
      );
    }
  }

  getData() {
    this.orders = new Array();
    let data = this.orderService.getAllOrders();
    data.subscribe(response => {
      this.orders = response;
    });

  }
}


