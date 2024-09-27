import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { ButtonSolidStyle1 } from "../ButtonSolidStyle1/ButtonSolidStyle1.component";
@Component({
  selector: "cta",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ButtonSolidStyle1],
  templateUrl: "./CTA.component.html",
  styleUrls: ["./CTA.component.css"],
})
export class CTA {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() propHeight: string = "";
  @Input() propWidth: string = "";
  @Input() propTop1: string = "";
  @Input() propRight: string = "";
  @Input() propBottom: string = "";
  @Input() propLeft1: string = "";
  /** Style props */
  @Input() propTop: string | number = "";
  @Input() propLeft: string | number = "";
  @Input() propColor: string | number = "";
  @Input() propOpacity: string | number = "";
  @Input() propColor1: string | number = "";

  get cTA02Style() {
    return {
      top: this.propTop,
      left: this.propLeft,
    };
  }

  get withLotsOfStyle() {
    return {
      color: this.propColor,
      opacity: this.propOpacity,
    };
  }

  get readyToLaunchStyle() {
    return {
      color: this.propColor1,
    };
  }
}
