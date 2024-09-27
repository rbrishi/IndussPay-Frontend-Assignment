import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "features-content",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./FeaturesContent.component.html",
  styleUrls: ["./FeaturesContent.component.css"],
})
export class FeaturesContent {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() organizedTasks: string = "";
  @Input() icon: string = "";
  /** Style props */
  @Input() propLeft: string | number = "";
  @Input() propTop: string | number = "";

  get featuresContentStyle() {
    return {
      left: this.propLeft,
      top: this.propTop,
    };
  }
}
