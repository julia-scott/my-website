import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-website';
  imgs = new Array();

  ngOnInit() {
    this.pload(
      '../assets/about_main.jpg',
      '../assets/animals/chicken.jpg',
      '../assets/animals/daisy1.jpg',
      '../assets/animals/daisy2.jpg',
      '../assets/animals/daisy3.jpg',
      '../assets/animals/horse.jpg',
      '../assets/animals/koala.jpg',
      '../assets/animals/molly3.jpg',
      '../assets/animals/puppies.jpg',
      '../assets/animals/roo.jpg',
      '../assets/sports/beach1.jpg',
      '../assets/sports/beach3.jpeg',
      '../assets/sports/hockey2.png',
      '../assets/sports/hockey3.jpg',
      '../assets/sports/snowboard1.jpg',
      '../assets/sports/surf1.jpg',
      '../assets/sports/vball1.jpg',
      '../assets/sports/vball2.jpg',
      '../assets/sports/wakeboard2.jpg',
      '../assets/travel/australia1.jpg',
      '../assets/travel/bryce1.jpg',
      '../assets/travel/cali2.jpg',
      '../assets/travel/cali4.jpg',
      '../assets/travel/cali5.jpg',
      '../assets/travel/cuba1.jpg',
      '../assets/travel/cuba2.jpg',
      '../assets/travel/europe1.jpeg',
      '../assets/travel/europe2.jpeg',
      '../assets/travel/zion1.jpg'
    );
  }

  pload(...args: any[]): void {
    for (var i = 0; i < args.length; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].src = args[i];
      console.log('loaded: ' + args[i]);
    }
  }
}
