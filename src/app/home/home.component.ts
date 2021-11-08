import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trending = [
    {src: "assets/img/lavie-trending.jpg",id1:"Women",id2:"Bag"},
    {src: "assets/img/fastrack-trending.jpg",id1:"Any",id2:"Watch"},
    {src:"assets/img/puma-trending.jpg",id1:"Any",id2:"Shoes"},
    {src: "assets/img/limeroad-trending.jpg",id1:"Any",id2:"Accessory"},
    {src: "assets/img/samsung-trending.png",id1:"",id2:""}
    
    
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
