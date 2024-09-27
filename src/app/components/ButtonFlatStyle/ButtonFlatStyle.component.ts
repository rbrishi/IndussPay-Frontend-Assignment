import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "button-flat-style",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./ButtonFlatStyle.component.html",
  styleUrls: ["./ButtonFlatStyle.component.css"],
})
export class ButtonFlatStyle {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Style props */
  @Input() propFilter: string | number = "";

  get buttonFlatStyle04Style() {
    return {
      filter: this.propFilter,
    };
  }
}
