import { Component, OnInit } from '@angular/core';
import { data } from '../data/data';
import { winningPositions } from '../data/winningPositions';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../app/dialog-modal/dialog-modal.component';
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
    console.log('isBoxChecked formation', this.isBoxChecked);
    console.log('winnininiggg', winning);
    if (winning) {
      this.won = true;
      confetti();
      this.openDialog();
    }

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

  openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // change what happens here according to button
      // make function for shuffling card
    });
  }
}
