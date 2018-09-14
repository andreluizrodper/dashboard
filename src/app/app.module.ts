import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginModule } from './auth/login/login.module';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminModule } from './admin/admin.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      LoginModule,
      PanelModule,
      AdminModule,
      routing,
      AuthModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],    
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
