import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ButtonSolidStyle1 } from "../ButtonSolidStyle1/ButtonSolidStyle1.component";
@Component({
  selector: "hero",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [ButtonSolidStyle1],
  templateUrl: "./Hero.component.html",
  styleUrls: ["./Hero.component.css"],
})
export class Hero {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
