import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { LoginComponent } from "./auth/login/login.component";
import { PanelComponent } from "./panel/panel.component";
import { AdminComponent } from "./admin/admin.component";

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'admin', component: AdminComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

