import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  footerState = false;

  arrayOfLaunch;
  timeRatio = 1;

  number = 0;
  displayRefresher = true;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?limit=10?format=json')
      .subscribe(data => {
        this.transformData(data);
      })
  }
  getMore(){
    this.timeRatio = 0;
    this.number++;
     let number = this.number * 10;
    this.http.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?format=json&limit=10&offset=' + number)
      .subscribe(data => {
        this.addData(data);

      })
  }

  transformData(data){
    this.arrayOfLaunch = data.results;
  }
  addData(data){

console.log(data.next);


    if (!data.next) {
      this.displayRefresher = false;
    }
    for (let result = 0; result < data.results.length; result++) {
      this.arrayOfLaunch.push(data.results[result]);

    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.gotoTop();
    }, 200);

    setTimeout(() => {
      this.footerState = true;
    }, 800);
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0
    });
  }




}
