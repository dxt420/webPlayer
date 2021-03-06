import { PlaylistDetailInterface } from '../interfaces/playlist-detail.interface';
import { PlaylistDetailService } from './services/playlist-detail.service';
import { Component, OnInit } from '@angular/core';

interface LinkedScrolling {
  element: HTMLElement;
  elementClass: string;
  linked: HTMLElement;
  linkedClass: string;
}

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss'],
})
export class PlaylistDetailComponent implements OnInit {
  playlist: PlaylistDetailInterface;
  gradientOpacity = 0.09;
  prevScrollPos = { banner: 0, 'track-list': 0 };

  constructor(private playlistDetailService: PlaylistDetailService) {}

  ngOnInit() {
    this.playlist = this.playlistDetailService.getDetail();
  }

  linkedScrolling({
    element,
    elementClass,
    linked,
    linkedClass,
  }: LinkedScrolling) {
    const scrollDist = element.scrollTop - this.prevScrollPos[elementClass];
    linked.scrollTop += scrollDist;
    this.prevScrollPos[elementClass] = element.scrollTop;
    this.prevScrollPos[linkedClass] = linked.scrollTop;
  }
}
