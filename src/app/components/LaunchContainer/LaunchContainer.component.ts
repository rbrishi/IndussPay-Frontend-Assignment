import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { LaunchContent } from "../LaunchContent/LaunchContent.component";
@Component({
  selector: "launch-container",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [LaunchContent],
  templateUrl: "./LaunchContainer.component.html",
  styleUrls: ["./LaunchContainer.component.css"],
})
export class LaunchContainer {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
