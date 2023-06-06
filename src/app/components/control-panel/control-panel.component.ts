import { Component, OnInit } from '@angular/core';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/pages/interface/IPlaylist';
import { SpotifyServices } from 'src/app/pages/services/spotify.service';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

selectedMenu = 'Home';

playlists: IPlaylist[] = [];


//icons
homeIcon = faHome;
searchIcon = faSearch;
artistIcon = faGuitar;
playlistIcon = faMusic;

constructor(private spotifyServices: SpotifyServices){}

ngOnInit(): void {
  this.searchPlaylists();
}

buttonClick(button: string): void{
  this.selectedMenu = button;
}

async searchPlaylists(){
  this.playlists = await this.spotifyServices.searchPlaylistUser();
  console.log(this.playlists)
}


}
