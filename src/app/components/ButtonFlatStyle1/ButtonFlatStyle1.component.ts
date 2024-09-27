import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "button-flat-style1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./ButtonFlatStyle1.component.html",
  styleUrls: ["./ButtonFlatStyle1.component.css"],
})
export class ButtonFlatStyle1 {
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
