import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "feature-pair",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./FeaturePair.component.html",
  styleUrls: ["./FeaturePair.component.css"],
})
export class FeaturePair {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() icon: string = "";
  @Input() dedicatedProjectMa: string = "";
  /** Style props */
  @Input() propWidth: string | number = "";

  get dedicatedProjectMaStyle() {
    return {
      width: this.propWidth,
    };
  }
}
