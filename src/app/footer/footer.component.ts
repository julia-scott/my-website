import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
	
	constructor() {
	}

  ngOnInit(): void {
    if (document.body.scrollHeight > document.body.clientHeight) {
      document.getElementById("footer")?.setAttribute('style','position:sticky');
    }
  }

}
