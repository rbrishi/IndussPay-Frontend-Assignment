import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ButtonFlatStyle1 } from "../ButtonFlatStyle1/ButtonFlatStyle1.component";
@Component({
  selector: "frame-component1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonFlatStyle1],
  templateUrl: "./FrameComponent1.component.html",
  styleUrls: ["./FrameComponent1.component.css"],
})
export class FrameComponent1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
