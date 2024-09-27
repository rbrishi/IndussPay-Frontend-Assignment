import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ButtonSolidStyle1 } from "../ButtonSolidStyle1/ButtonSolidStyle1.component";
import { ButtonSolidStyle } from "../ButtonSolidStyle/ButtonSolidStyle.component";
@Component({
  selector: "frame-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonSolidStyle1, ButtonSolidStyle],
  templateUrl: "./FrameComponent.component.html",
  styleUrls: ["./FrameComponent.component.css"],
})
export class FrameComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
