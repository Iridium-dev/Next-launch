import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-one-launch',
  templateUrl: './one-launch.component.html',
  styleUrls: ['./one-launch.component.scss']
})
export class OneLaunchComponent implements OnInit {

  @Input() launch;
  @Input() time;

  //backgroundUrl = 'https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20200609172008.png';
  backgroundUrl;
  dateNet;
  countdownValue;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.time = (this.time) * 100;

    setTimeout(() => {
      this.time = 0;

    }, 2500);

    this.updateCountDown();

    if (this.launch.image_url) {
      this.backgroundUrl = this.launch.image_url;
    }



    else{
      this.http.get(this.launch.rocket.configuration.url)
        .subscribe(data => {
          this.transformData(data);
        })
    }  //a retirer à la fin pour eviter de faire trop de requete

    this.launch.id = setInterval(() => {
      this.updateCountDown();
    }, 10000)




  }

  transformData(data){
    this.backgroundUrl = data.image_url;
  }

  ngOnDestroy() {
    clearInterval(this.launch.id);
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
