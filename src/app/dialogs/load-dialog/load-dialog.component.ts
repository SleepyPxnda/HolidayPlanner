import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-load-dialog',
  templateUrl: './load-dialog.component.html',
  styleUrls: ['./load-dialog.component.scss']
})
export class LoadDialogComponent {

  @Input()
  isVisible: boolean = false;

  dataString: string = "";

  @Output()
  close: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  closeDialog() {
    this.close.emit(this.dataString)
  }
}
