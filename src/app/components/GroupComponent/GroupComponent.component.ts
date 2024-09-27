import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ExtraNameStyle } from "../ExtraNameStyle/ExtraNameStyle.component";
@Component({
  selector: "group-component",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ExtraNameStyle],
  templateUrl: "./GroupComponent.component.html",
  styleUrls: ["./GroupComponent.component.css"],
})
export class GroupComponent {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
