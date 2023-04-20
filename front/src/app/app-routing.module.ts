import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { ListaComponent } from "./klasy/lista.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
  { path: "", component: IndexComponent},
  { path: "create", component: CreateComponent},
  { path: "klasy", component: ListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
