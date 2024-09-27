import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ButtonFlatStyle } from "../ButtonFlatStyle/ButtonFlatStyle.component";
@Component({
  selector: "services",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonFlatStyle],
  templateUrl: "./Services.component.html",
  styleUrls: ["./Services.component.css"],
})
export class Services {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
