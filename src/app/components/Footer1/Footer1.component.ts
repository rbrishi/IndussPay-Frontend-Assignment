import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "footer1",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Footer1.component.html",
  styleUrls: ["./Footer1.component.css"],
})
export class Footer1 {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
