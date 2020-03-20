import { PlaylistDetailService } from './components/services/playlist-detail.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistDetailRoutingModule } from './playlist-detail-routing.module';
import { PlaylistDetailComponent } from './components/playlist-detail.component';
import { TrackListComponent } from './track-list/track-list.component';
import { BannerComponent } from './banner/banner.component';
import { MusicTileComponent } from './music-tile/music-tile.component';

@NgModule({
  declarations: [PlaylistDetailComponent, TrackListComponent, BannerComponent, MusicTileComponent],
  imports: [CommonModule, PlaylistDetailRoutingModule],
  providers: [PlaylistDetailService]
})
export class PlaylistDetailModule {}