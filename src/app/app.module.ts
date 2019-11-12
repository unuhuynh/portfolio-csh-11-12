import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Material } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CshbotComponent } from './cshbot/cshbot.component';

import { CalcService } from '../calc.service';
import { CshbotService } from '../cshbot.service';
import { seattlebot } from '../seattlebot/seattlebpt/component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'cshbot', component: CshbotComponent }
    { paqth: 'seattlebot', component: seattlebot },
  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, CshbotComponent, seattlebotComponent ],
  providers: [CalcService, CshbotService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
