import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "button-solid-style",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./ButtonSolidStyle.component.html",
  styleUrls: ["./ButtonSolidStyle.component.css"],
})
export class ButtonSolidStyle {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Style props */
  @Input() propAlignSelf: string | number = "";
  @Input() propWidth: string | number = "";

  get buttonSolidStyle01Style() {
    return {
      "align-self": this.propAlignSelf,
      width: this.propWidth,
    };
  }
}
