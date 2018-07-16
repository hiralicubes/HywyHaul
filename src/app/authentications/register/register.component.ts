import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slick-single').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
     dots: true,
     arrows: false,
     lazyLoad: 'ondemand',
     autoplay: true,
     adaptiveHeight: false
    });
  }

}
