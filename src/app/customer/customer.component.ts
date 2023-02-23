

import { Component } from '@angular/core';
import {Customer} from './Customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class customerComponent{
  CurrentCustomer:Customer=new Customer();
}
