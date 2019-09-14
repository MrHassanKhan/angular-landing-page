import { Component, OnInit, ɵɵpureFunction6, AfterViewInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { AppService } from '../app.service';

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit, AfterViewInit {
  videolist = [
    {
      name: "Item1",
      slug: "item1",
      embed: `6wD4V0rvlDI`
    }
  ];
  constructor(private Sanitizer: DomSanitizer, private appService: AppService) {}

  ngOnInit() {
  }

  getembedurl(item) {
    return this.Sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + item.embed
    );
  }

  ngAfterViewInit() {
    const nav = document.getElementById("nav");
    window.onscroll = () => {
      if (window.pageYOffset > 320) {
        nav.style.backgroundColor = "#1f3a6d";
      } else {
        nav.style.backgroundColor = "transparent";
      }
    };
    if (this.appService.offsetTop) {
      const top = this.appService.offsetTop;
      window.scrollTo({top, behavior: "smooth"});
    }
  }


  scrollToDiv(el: HTMLElement) {
    setTimeout(() => {
      this.appService.offsetTop = window.pageYOffset;
    }, 1300);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
