import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayOfLaunch;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.http.get('https://spacelaunchnow.me/api/3.3.0/launch/upcoming/?limit=10?format=json')
      .subscribe(data => {
        this.transformData(data);
      })
  }

  transformData(data){
    this.arrayOfLaunch = data.results;
  }

}
