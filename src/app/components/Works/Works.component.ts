import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ButtonFlatStyle1 } from "../ButtonFlatStyle1/ButtonFlatStyle1.component";
@Component({
  selector: "works",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonFlatStyle1],
  templateUrl: "./Works.component.html",
  styleUrls: ["./Works.component.css"],
})
export class Works {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
