import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [LayoutRoutingModule, CommonModule, SharedModule],
})
export class LayoutModule {}
