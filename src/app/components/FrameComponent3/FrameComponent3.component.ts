import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FeaturePair } from "../FeaturePair/FeaturePair.component";
import { LaunchContent } from "../LaunchContent/LaunchContent.component";
@Component({
  selector: "frame-component3",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FeaturePair, LaunchContent],
  templateUrl: "./FrameComponent3.component.html",
  styleUrls: ["./FrameComponent3.component.css"],
})
export class FrameComponent3 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
