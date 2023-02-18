import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotListComponent } from './spot-list/spot-list.component';
import { SpotService } from './spot-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SpotItemComponent } from './spot-item/spot-item.component';
import { RouterModule } from '@angular/router';
import { SpotDetailComponent } from './spot-detail/spot-detail.component';
import { MapsUrlPipe } from './maps-url.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpotListComponent,
    SpotItemComponent,
    SpotDetailComponent,
    MapsUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'spot-list',
        component: SpotListComponent
      },
      {
        path: 'spot-detail/:id',
        component: SpotDetailComponent
      },
      {
        path: '**',
        redirectTo: 'spot-list'
      },
    ]),
    ReactiveFormsModule
  ],
  providers: [
    SpotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
