import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
import { FrameComponent1 } from "../../components/FrameComponent1/FrameComponent1.component";
import { FrameComponent2 } from "../../components/FrameComponent2/FrameComponent2.component";
import { FrameComponent3 } from "../../components/FrameComponent3/FrameComponent3.component";
import { FrameComponent4 } from "../../components/FrameComponent4/FrameComponent4.component";
import { Testimonial } from "../../components/Testimonial/Testimonial.component";
import { LaunchContainer } from "../../components/LaunchContainer/LaunchContainer.component";
import { Footer } from "../../components/Footer/Footer.component";
@Component({
  selector: "agency",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FrameComponent,
    FrameComponent1,
    FrameComponent2,
    FrameComponent3,
    FrameComponent4,
    Testimonial,
    LaunchContainer,
    Footer,
  ],
  templateUrl: "./Agency.component.html",
  styleUrls: ["./Agency.component.css"],
})
export class Agency {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
