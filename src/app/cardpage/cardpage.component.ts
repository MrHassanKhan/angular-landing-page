import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  y: string;
  pagePrice1: number;
  buttonclicked = false;
  buttonclicked1;

  Boss1(event) {
    this.buttonclicked = true;
    this.pagePrice1 = 540000;
    event.target.style["background-color"] = "#98afc7";
    console.log(event.target.style["background-color"]);
    document.getElementById("button2").style.backgroundColor = "#f2f2f2";
    document.getElementById("button3").style.backgroundColor = "#f2f2f2";
  }

  Executive1(event) {
    this.buttonclicked = true;
    this.pagePrice1 = 900000;
    event.target.style["background-color"] = "#98afc7";
    console.log(event.target.style["background-color"]);
    document.getElementById("button1").style.backgroundColor = "#f2f2f2";
    document.getElementById("button3").style.backgroundColor = "#f2f2f2";
  }
  President1(event) {
    this.buttonclicked = true;
    this.pagePrice1 = 1800000;
    event.target.style["background-color"] = "#98afc7";
    console.log(event.target.style["background-color"]);
    document.getElementById("button1").style.backgroundColor = "#f2f2f2";
    document.getElementById("button2").style.backgroundColor = "#f2f2f2";
  }
  function5(event) {
    if (this.buttonclicked1 == true) {
      {
        {
          this.pagePrice1;
        }
      }

      this.buttonclicked1 = false;
      this.y = "hi";
    } else {
      this.buttonclicked1 = true;
      {
        {
          this.pagePrice1;
        }
      }
    }
  }
}
