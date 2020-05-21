import { ImageModule } from './../shared/modules/image/image.module';
import { ActionsService } from './../shared/services/actions-service/actions.service';
import { ActionsModule } from './../shared/modules/actions/actions.module';
import { OverlayService } from './../shared/services/overlay-service/overlay.service';
import { PlaylistDetailService } from './playlist-detail.component/services/playlist-detail.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistDetailRoutingModule } from './playlist-detail-routing.module';
import { PlaylistDetailComponent } from './playlist-detail.component/playlist-detail.component';
import { TrackListComponent } from './track-list/track-list.component';
import { BannerComponent } from './banner/banner.component';
import { MusicTileComponent } from './music-tile/music-tile.component';

@NgModule({
  declarations: [
    PlaylistDetailComponent,
    TrackListComponent,
    BannerComponent,
    MusicTileComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    ActionsModule,
    PlaylistDetailRoutingModule,
  ],
  providers: [PlaylistDetailService, ActionsService],
})
export class PlaylistDetailModule {}