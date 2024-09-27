import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { CTA } from "../CTA/CTA.component";
import { FeaturesContent } from "../FeaturesContent/FeaturesContent.component";
@Component({
  selector: "features",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CTA, FeaturesContent],
  templateUrl: "./Features.component.html",
  styleUrls: ["./Features.component.css"],
})
export class Features {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
