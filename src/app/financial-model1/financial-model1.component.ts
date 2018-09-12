import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-model1',
  templateUrl: './financial-model1.component.html',
  styleUrls: ['./financial-model1.component.css']
})
export class FinancialModel1Component implements OnInit {

  constructor() { }

  model = {investment: 0, retirement: 0, currAge: 0, expectancy:0, annuity:0, expense:0, inflation: 0, interest: 0, interestRet: 0};
  begRetMoney = 0; corpus = 0; sipReq = 0;
  evaluated = false;
  

  ngOnInit() {
    this.model.annuity = 0;
    this.model.expectancy = 0;
  }

  calculate(){
    this.model.investment = (this.model.retirement - this.model.currAge)*12;
    this.model.annuity = (this.model.expectancy - this.model.retirement)*12;
  }

  onSubmit(){
    console.log(this.model.annuity);
    // this.model.investment = (this.model.retirement - this.model.currAge)*12;
    this.begRetMoney = this.model.expense*Math.pow((1+(this.model.inflation/12)),this.model.investment);
    this.corpus = -this.PV(((1+this.model.interestRet)/(1+this.model.inflation)-1)/12,this.model.annuity,this.begRetMoney,0,1);
    this.sipReq = -this.PMT(this.model.interest/12,this.model.investment,0,this.corpus,1);


    this.evaluated = true;
  }

  PV(rate, periods, payment, future, type) {
  // Initialize type
    var type = (typeof type === 'undefined') ? 0 : type;

    // Evaluate rate and periods (TODO: replace with secure expression evaluator)
    rate = eval(rate);
    periods = eval(periods);

    // Return present value
    if (rate === 0) {
      return - payment * periods - future;
    } else {
      return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 +rate * type) - future) / Math.pow(1 + rate, periods);
    }
  }


  PMT(rate, nper, pv, fv, type) {
		if (!fv) fv = 0;
		if (!type) type = 0;

		if (rate == 0) return -(pv + fv)/nper;
		
		var pvif = Math.pow(1 + rate, nper);
		var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

		if (type == 1) {
			pmt /= (1 + rate);
		};

		return pmt;
	}


}
