import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Footer1 } from "../Footer1/Footer1.component";
import { CTA } from "../CTA/CTA.component";
@Component({
  selector: "footer-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Footer1, CTA],
  templateUrl: "./Footer.component.html",
  styleUrls: ["./Footer.component.css"],
})
export class Footer {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
