import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pride-bingo';
  data = [];
  prideTitle = [];
  isBoxChecked = false;

  ngOnInit() {
    this.data = Array.from(Array(25).keys());
    this.prideTitle = ('PRIDE').split('');
  }

  // checkBox(){
  //   // fix this to make a toggle
  //   this.isBoxChecked = !this.isBoxChecked;
  // }
}
