import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

declare var $$, $S, $T, $Q: any;
declare var $appresBinding$: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myapp';

  onReady = null;
  onLanguageChange = null;

  onAppRes(): void {
    this.title = $$("myapp");
  }
  onAppResInit(): void {
    let self = this;
    this.onReady = function() {
      console.log(">>> onReady from component");
      self.onAppRes();
    }
    this.onLanguageChange = function() {
      console.log(">>> onLanguageChange from component");
      self.onAppRes();
    }
    if($appresBinding$["OnReady"]==null) $appresBinding$["OnReady"] = [];
    if($appresBinding$["OnLanguageChange"]==null) $appresBinding$["OnLanguageChange"] = [];
    $appresBinding$["OnReady"].push(this.onReady);
    $appresBinding$["OnLanguageChange"].push(this.onLanguageChange);
  }
  onAppResDestroy(): void {
    let index = $appresBinding$["OnReady"].indexOf(this.onReady);
    if(index>=0) $appresBinding$["OnReady"].splice(index, 1);      
    index = $appresBinding$["OnLanguageChange"].indexOf(this.onLanguageChange);
    if(index>=0) $appresBinding$["OnLanguageChange"].splice(index, 1);      
  }

  ngOnInit(): void {
    this.onAppResInit();
  }
  ngOnDestroy(): void {
    this.onAppResDestroy();
  }
}
