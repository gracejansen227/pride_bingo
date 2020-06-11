import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pride-bingo';
  data = [];
  prideTitle = [];

  ngOnInit() {
    this.data = Array.from(Array(25).keys());
    this.prideTitle = ('PRIDE').split('');
  }
}
