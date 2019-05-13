import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    loadChildren: "../app/about/about.module#AboutModule"
  },
  {
    path: "contact",
    loadChildren: "../app/contact/contact.module#ContactModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class LazyLoadingModule {}
