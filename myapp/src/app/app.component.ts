import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

declare var $$, $S, $T, $Q: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  ngOnInit(): void {
    let self = this;
    window.onload = function(e) {
      $$().ready(()=>{
        self.title = $$("myapp");
      });
    }
  }
}
