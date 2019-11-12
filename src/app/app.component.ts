import { Component } from '@angular/core';
import { hello } from '../scripts/custom.js';
import { CalcService } from '../calc.service';
import { CshbotService } from '../cshbot.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [CshbotService]
})
export class AppComponent  {
  name = 'Angular';
  sum: number = 0;

  sum2: number = 0;


  constructor(calc:CalcService) {
    //Use calc
    this.sum = calc.barneyrubble(1,2,3,40);
    //this.sum2 = 

    //this.sum2 = calc.cshbot(4,8,3,5,76);
  }

  ngOnInit()  {
      //hello()

  }
  
}
