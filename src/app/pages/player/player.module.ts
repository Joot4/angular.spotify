import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { RoutesPlayer } from './player.routes';
import { ControlPanelComponent } from 'src/app/components/control-panel/control-panel.component';
import { MenubuttonComponent } from 'src/app/components/menubutton/menubutton.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PlayerComponent,
    ControlPanelComponent,
    MenubuttonComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(RoutesPlayer)
  ]
})
export class PlayerModule { }
