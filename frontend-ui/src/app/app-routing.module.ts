import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { CreatePinComponent } from './shared/pins/create-pin/create-pin.component';
import { PinDetailComponent } from './shared/pins/pin-detail/pin-detail.component';
import { PinsComponent } from './shared/pins/pins.component';
import { SearchComponent } from './shared/search/search.component';
import { UserProfileComponent } from './shared/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user-profile/:userId',
    component: UserProfileComponent,
  },
  // {
  //   path: '',
  //   component: PinsComponent,
  // },
  {
    path: 'pin-detail/:pinid',
    component: PinDetailComponent,
  },
  {
    path: 'create-pin',
    component: CreatePinComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
