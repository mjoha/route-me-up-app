import { Component } from '@angular/core';
import {MatListItem, MatListItemIcon, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-sport-picker',
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemIcon,
  ],
  templateUrl: './sport-picker.component.html',
  styleUrl: './sport-picker.component.css'
})
export class SportPickerComponent {

}
