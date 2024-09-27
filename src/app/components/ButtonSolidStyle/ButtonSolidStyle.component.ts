import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "button-solid-style",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ButtonSolidStyle.component.html",
  styleUrls: ["./ButtonSolidStyle.component.css"],
})
export class ButtonSolidStyle {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
