import { LoginpageComponent } from "./loginpage/loginpage.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Scroll } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { PlanspageComponent } from "./planspage/planspage.component";
import { CardpageComponent } from "./cardpage/cardpage.component";
import { PrivacypolicypageComponent } from "./privacypolicypage/privacypolicypage.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomepageComponent },
  { path: "plans", component: PlanspageComponent },
  { path: "card", component: CardpageComponent },
  { path: "privacy", component: PrivacypolicypageComponent },
  { path: "login", component: LoginpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
