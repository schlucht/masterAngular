import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModsComponent } from './mods/mods.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ModsHomeComponent, ModsComponent],
    imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
