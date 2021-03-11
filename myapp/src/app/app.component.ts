import { OnInit, OnDestroy, Component, ChangeDetectorRef } from '@angular/core';

declare var $$, $S, $T, $Q: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'myapp';

  onTranslate = null;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    let self = this;
    this.onTranslate = function() {
      self.title = $$("myapp");
      self.cdr.detectChanges();
    }
    $$().addEvent("onTranslate", this.onTranslate);
  }
  ngOnDestroy(): void {
    $$().removeEvent("onTranslate", this.onTranslate);
  }
}
