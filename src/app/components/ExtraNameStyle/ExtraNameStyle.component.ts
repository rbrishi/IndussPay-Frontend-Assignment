import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "extra-name-style",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ExtraNameStyle.component.html",
  styleUrls: ["./ExtraNameStyle.component.css"],
})
export class ExtraNameStyle {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
