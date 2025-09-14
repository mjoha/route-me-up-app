import {Component, inject} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {SportPickerComponent} from './sport-picker/sport-picker.component';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-route-creator',
  imports: [
    MatIcon,
    MatIconButton,
    MatButton,
    MatMiniFabButton
  ],
  templateUrl: './route-creator.component.html',
  styleUrl: './route-creator.component.css'
})
export class RouteCreatorComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openSportPicker(): void {
    this._bottomSheet.open(SportPickerComponent);
  }
}
