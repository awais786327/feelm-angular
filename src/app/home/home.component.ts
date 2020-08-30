import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import data from '../../assets/address_endpoint_response.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  isResult: any = null;
  items: any = null;

  constructor(private quoteService: QuoteService) {
    this.items = data;
    console.log(data);
  }

  ngOnInit() {
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; });
  }

  showResult(val: string) {
    this.isResult = '';
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isResult = val;
    });
  }

  getPhones(phones: any) {
    return phones.map((obj: any) => obj.phone_number);
  }
}
