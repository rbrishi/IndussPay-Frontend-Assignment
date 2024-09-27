import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ExtraNameStyle } from "../ExtraNameStyle/ExtraNameStyle.component";
@Component({
  selector: "frame-component2",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ExtraNameStyle],
  templateUrl: "./FrameComponent2.component.html",
  styleUrls: ["./FrameComponent2.component.css"],
})
export class FrameComponent2 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
