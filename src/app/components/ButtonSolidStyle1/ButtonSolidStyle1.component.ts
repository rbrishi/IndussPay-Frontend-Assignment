import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "button-solid-style1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ButtonSolidStyle1.component.html",
  styleUrls: ["./ButtonSolidStyle1.component.css"],
})
export class ButtonSolidStyle1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
