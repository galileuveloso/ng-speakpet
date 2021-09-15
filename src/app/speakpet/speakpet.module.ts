import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitingComponent } from './waiting/waiting.component';
import { ManageAudiosComponent } from './manage-audios/manage-audios.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AudioService } from '../services/audio/audio.service';
import { PlaybackService } from '../services/playback/playback.service';
import { UserService } from '../services/user/user.service';

@NgModule({
  declarations: [
    WaitingComponent,
    ManageAudiosComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    AudioService,
    PlaybackService,
    UserService
  ]
})
export class SpeakpetModule { }
