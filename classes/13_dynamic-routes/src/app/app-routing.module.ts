import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { EventsComponent } from './components/events/events.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'emitter', component: ChangeNumberComponent },
  { path: 'directives', component: DirectivesComponent },
  // { path: 'emitter', component: ParentDataComponent },
  { path: 'events', component: EventsComponent },
  { path: 'conditional', component: IfRenderComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'two-way', component: TwoWayBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
