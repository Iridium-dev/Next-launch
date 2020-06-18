import { Component } from '@angular/core';
import { RouterOutlet, Router } from "@angular/router";
import * as AOS from 'aos';
import { slider } from "../animation";
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider]
})
export class AppComponent {
  title = 'nextLaunch';
  ngOnInit(){
    AOS.init({
      offset: 10,
      easing: 'ease',
      duration: 700,
      once: true
    });

    missionState;

  }

  constructor(private router: Router){
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  updateUrl(){
    console.log(this.router.url);
    let url = this.router.url;
    if (url.search("mission") != -1) {
      this.missionState = 'Back to schedule';
    }
    else{
      this.missionState = 'Schedule';
    }
  }


}
