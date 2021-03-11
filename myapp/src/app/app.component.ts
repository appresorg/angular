import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

declare var $$, $S, $T, $Q: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myapp';

  onReady = null;
  onLanguageChange = null;

  onAppResTranslate(): void {
    this.title = $$("myapp");
  }
  onAppResInit(): void {
    const self = this;
    this.onReady = function(sender) {
      self.onAppResTranslate();
    }
    this.onLanguageChange = function(sender) {
      self.onAppResTranslate();
    }
    $$().addEvent("onReady", this.onReady);
    $$().addEvent("onLanguageChange", this.onLanguageChange);
  }
  onAppResDestroy(): void {
    $$().removeEvent("onReady", this.onReady);
    $$().removeEvent("onLanguageChange", this.onLanguageChange);
  }

  ngOnInit(): void {
    this.onAppResInit();
  }
  ngOnDestroy(): void {
    this.onAppResDestroy();
  }
}
