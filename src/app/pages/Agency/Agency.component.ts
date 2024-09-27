import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Footer } from "../../components/Footer/Footer.component";
import { Works } from "../../components/Works/Works.component";
import { Features } from "../../components/Features/Features.component";
import { About } from "../../components/About/About.component";
import { GroupComponent } from "../../components/GroupComponent/GroupComponent.component";
import { Services } from "../../components/Services/Services.component";
import { Hero } from "../../components/Hero/Hero.component";
import { ButtonSolidStyle } from "../../components/ButtonSolidStyle/ButtonSolidStyle.component";
@Component({
  selector: "agency",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    Footer,
    Works,
    Features,
    About,
    GroupComponent,
    Services,
    Hero,
    ButtonSolidStyle,
  ],
  templateUrl: "./Agency.component.html",
  styleUrls: ["./Agency.component.css"],
})
export class Agency {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
