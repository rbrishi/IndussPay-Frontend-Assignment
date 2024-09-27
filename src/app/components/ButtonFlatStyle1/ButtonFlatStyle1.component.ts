import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "button-flat-style1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ButtonFlatStyle1.component.html",
  styleUrls: ["./ButtonFlatStyle1.component.css"],
})
export class ButtonFlatStyle1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
