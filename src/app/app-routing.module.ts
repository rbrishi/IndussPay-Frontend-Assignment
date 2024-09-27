import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Agency } from "./pages/Agency/Agency.component";
const routes: Routes = [
  {
    path: "",
    component: Agency,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
