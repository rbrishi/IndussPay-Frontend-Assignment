import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "footer-1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Footer.component.html",
  styleUrls: ["./Footer.component.css"],
})
export class Footer {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
