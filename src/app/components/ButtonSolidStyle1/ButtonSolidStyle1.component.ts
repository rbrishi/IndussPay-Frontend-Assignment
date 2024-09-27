import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "button-solid-style1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./ButtonSolidStyle1.component.html",
  styleUrls: ["./ButtonSolidStyle1.component.css"],
})
export class ButtonSolidStyle1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Style props */
  @Input() propHeight: string | number = "";
  @Input() propWidth: string | number = "";
  @Input() propTop: string | number = "";
  @Input() propRight: string | number = "";
  @Input() propBottom: string | number = "";
  @Input() propLeft: string | number = "";

  get buttonSolidStyle04Style() {
    return {
      height: this.propHeight,
      width: this.propWidth,
      top: this.propTop,
      right: this.propRight,
      bottom: this.propBottom,
      left: this.propLeft,
    };
  }
}
