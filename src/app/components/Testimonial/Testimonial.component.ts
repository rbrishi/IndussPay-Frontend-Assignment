import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "testimonial",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Testimonial.component.html",
  styleUrls: ["./Testimonial.component.css"],
})
export class Testimonial {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
