import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ButtonFlatStyle } from "../ButtonFlatStyle/ButtonFlatStyle.component";
@Component({
  selector: "frame-component4",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonFlatStyle],
  templateUrl: "./FrameComponent4.component.html",
  styleUrls: ["./FrameComponent4.component.css"],
})
export class FrameComponent4 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
