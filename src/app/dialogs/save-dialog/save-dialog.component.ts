import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConfigurationService} from "../../services/configuration.service";

@Component({
  selector: 'app-save-dialog',
  templateUrl: './save-dialog.component.html',
  styleUrls: ['./save-dialog.component.scss']
})
export class SaveDialogComponent {

  @Input()
  isVisible: boolean = false;

  @Output()
  close: EventEmitter<void> = new EventEmitter<void>();

  constructor(public configurationService: ConfigurationService) {
  }

  closeDialog() {
    this.close.emit();
  }
}
