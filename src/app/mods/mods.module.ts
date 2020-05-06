import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModsComponent } from './mods/mods.component';
import { SharedModule } from '../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
    declarations: [ModsHomeComponent, ModsComponent, AccordionComponent],
    imports: [CommonModule, ModsRoutingModule, SharedModule],
})
export class ModsModule {}
