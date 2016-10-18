import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
declare let accounting:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	isDone:boolean;
	data: any[];
	ac = accounting;

	constructor(public http:Http) {}

	goSearch( element:HTMLInputElement ):void {
		if(element.value != "") {
      this.isDone = false;
      this.http.request(`https://api.mercadolibre.com/sites/MLV/search?q=${element.value}`).subscribe((res: Response) => {
        this.data = res.json();
        console.log(this.data);
        console.log(`This should be formated: ${this.ac.formatMoney(4999.99, "BsF", 2, ".", ",")}`);
        this.isDone = true;
      })
    } else {
      console.log(`Invalid value in ${element.name}.`);
    }

	}  
}
