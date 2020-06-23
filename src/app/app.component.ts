import { Component, OnInit, Input } from '@angular/core';
import { data } from '../data/data';
import {
  winningPositions,
  winningPositionsWithNulls,
} from '../data/winningPositions';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../app/dialog-modal/dialog-modal.component';
import { fireworks } from '../app/utils/fireworks';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  title = 'pride-bingo';
  data = [];
  prideTitle = [];
  isBoxChecked = [];
  winningPositions = [];
  won = false;
  selectedGameGrid = [];
  gameModes = [];

  @Input() public selectedGame: [];

  ngOnInit() {
    this.data = data;
    this.prideTitle = 'PRIDE'.split('');
    this.winningPositions = winningPositions;
    this.selectedGame = [];
    this.gameModes = [...new Set(this.winningPositions.map((x) => x.name))];
    this.selectedGameGrid = winningPositionsWithNulls;
  }

  selectGameMode(selectedGame: []) {
    // console.log('selectedGame', selectedGame);
  }

  checkBox(i) {
    this.isBoxChecked[i] = this.isBoxChecked[i] || false;
    this.isBoxChecked[i] = !this.isBoxChecked[i];

    const winning = this.checkIfWon(this.isBoxChecked);
    if (winning) {
      this.won = true;
      // fireworks();
      confetti();
      setTimeout(() => this.openDialog(), 500);
    }
  }

  checkIfWon(arrayOfChecked) {
    let winningPositionsList = this.winningPositions;
    if (this.selectedGame.length > 0) {
      winningPositionsList = this.winningPositions.filter((game) =>
        this.selectedGame.includes(game.name)
      );
    }
    const winningGames = winningPositionsList.map((gameType) => {
      const positions = gameType.positions;
      return positions.every((position) => arrayOfChecked[position] === true);
    });

    if (winningGames.includes(true)) {
      return true;
    }
    return false;
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent);

    dialogRef.afterClosed().subscribe((reset) => {
      if (reset) {
        this.isBoxChecked = [];
        this.shuffleCards(this.data);
      }
    });
  }

  shuffleCards(dataArray: any[]) {
    return dataArray.sort(() => Math.random() - 0.5);
  }
}
