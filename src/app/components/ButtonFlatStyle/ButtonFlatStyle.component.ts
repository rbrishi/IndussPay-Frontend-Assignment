import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "button-flat-style",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ButtonFlatStyle.component.html",
  styleUrls: ["./ButtonFlatStyle.component.css"],
})
export class ButtonFlatStyle {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
