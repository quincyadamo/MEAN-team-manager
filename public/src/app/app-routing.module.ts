import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { AddplayerComponent } from './addplayer/addplayer.component'
import { ListplayersComponent } from './listplayers/listplayers.component'
import { ManageplayersComponent } from './manageplayers/manageplayers.component'
import { ManagersvpsComponent } from './managersvps/managersvps.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/players/list'},
  {path: 'players', pathMatch: 'full', redirectTo: '/players/list'},
  {path: 'players', pathMatch: 'prefix', component: ManageplayersComponent,
    children: [
      {path: 'list', pathMatch: 'full', component: ListplayersComponent},
      {path: 'addplayer', pathMatch: 'full', component: AddplayerComponent}
    ]
  },
  {path: 'status', pathMatch: 'full', component: ManagersvpsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }