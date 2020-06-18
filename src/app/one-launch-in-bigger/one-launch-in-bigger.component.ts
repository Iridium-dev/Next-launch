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

  ngOnInit(): void {
    this.getData(this.actRoute.snapshot.paramMap.get('id'));
  }
  getData(url){
    this.http.get(url)
      .subscribe(data => {
        this.transformData(data);
      })
  }

  transformData(data){
    this.launch = data;

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.gotoTop();
    }, 150);

    setTimeout(() => {
      this.ratioTime = 0;
    }, 750);
}

gotoTop() {
  window.scroll({
    top: 0,
    left: 0
  });
}


}
