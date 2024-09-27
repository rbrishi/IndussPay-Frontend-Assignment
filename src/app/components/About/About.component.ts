import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "about",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./About.component.html",
  styleUrls: ["./About.component.css"],
})
export class About {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
