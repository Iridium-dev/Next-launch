import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-launch-in-bigger',
  templateUrl: './one-launch-in-bigger.component.html',
  styleUrls: ['./one-launch-in-bigger.component.scss']
})
export class OneLaunchInBiggerComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private http: HttpClient) { }

  launch;
  ratioTime = 1;
  dateNet;
  countdownValue;

  ngOnInit(): void {
    this.getData(this.actRoute.snapshot.paramMap.get('id'));
  }
  getData(url){
    this.http.get(url)
      .subscribe(data => {
        this.transformData(data);
        console.log(data);

      })
  }

  transformData(data){
    this.launch = data;
    this.updateCountDown();
    this.launch.id = setInterval(() => {
      this.updateCountDown();
    }, 10000)
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.gotoTop();
    }, 200);

    setTimeout(() => {
      this.ratioTime = 0;
    }, 950);
}


ngOnDestroy() {
  clearInterval(this.launch.id);
}

gotoTop() {
  window.scroll({
    top: 0,
    left: 0
  });
}

updateCountDown(){
  this.dateNet = new Date(this.launch.net);
  let dateUnix = new Date(this.launch.net).getTime();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

  this.dateNet = this.dateNet.toLocaleDateString('en-EN', options);

  let distance = dateUnix - Date.now();
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  this.countdownValue = days + 'j ' + hours + 'h ' + minutes + 'm ';
}


}
