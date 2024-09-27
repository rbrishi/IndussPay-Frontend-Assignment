import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
import { ButtonSolidStyle } from "../ButtonSolidStyle/ButtonSolidStyle.component";
@Component({
  selector: "launch-content",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ButtonSolidStyle],
  templateUrl: "./LaunchContent.component.html",
  styleUrls: ["./LaunchContent.component.css"],
})
export class LaunchContent {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() propAlignSelf1: string = "";
  @Input() propWidth: string = "";
  /** Style props */
  @Input() propAlignSelf: string | number = "";
  @Input() propFlex: string | number = "";
  @Input() propColor: string | number = "";
  @Input() propColor1: string | number = "";

  get launchContentStyle() {
    return {
      "align-self": this.propAlignSelf,
      flex: this.propFlex,
    };
  }

  get readyToLaunchStyle() {
    return {
      color: this.propColor,
    };
  }

  get withLotsOfStyle() {
    return {
      color: this.propColor1,
    };
  }
}
