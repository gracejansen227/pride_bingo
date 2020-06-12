import { Component, OnInit } from '@angular/core';
import { data } from '../data/data';
import { winningPositions } from '../data/winningPositions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pride-bingo';
  data = [];
  prideTitle = [];
  isBoxChecked = [];
  winningPositions = [];

  ngOnInit() {
    this.data = data;
    this.prideTitle = 'PRIDE'.split('');
    this.winningPositions = winningPositions;
  }

  checkBox(i) {
    // fix this to make a toggle
    this.isBoxChecked[i] = this.isBoxChecked[i] || false;
    this.isBoxChecked[i] = !this.isBoxChecked[i];

    const winning = this.checkIfWon(this.isBoxChecked);
    console.log('winnininiggg', winning);

    // do check if won function here
  }

  checkIfWon(arrayOfChecked) {
    const winningGames = this.winningPositions.map((gameType) => {
      const positions = gameType.positions;
      return positions.every((position) => arrayOfChecked[position] === true);
    });

    if (winningGames.includes(true)) {
      return true;
    }
    return false;
  }
}
