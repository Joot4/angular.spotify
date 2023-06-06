import { IPlaylist } from './../interface/IPlaylist';
import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment.development';
import  Spotify from 'spotify-web-api-js'
import { IUser } from '../interface/IUser';
import { Router } from '@angular/router';
import { SpotifyPlaylisttoPlayList, spotifyUser } from 'src/app/common/helper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyServices {

  public spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor(private router: Router) {
    this.spotifyApi = new Spotify()
   }

   public async initService(){
    if(!!this.user){
      return true
    } 
      const token = localStorage.getItem('token');
      if(!token){
        return false;
      }
      
      try {
        this.getAcessToken(token);
        await this.getSpotifyInfo();
        return !!this.user;

      } catch (err) {
        return false;
      }
  }

  public getUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }

  public getTokenUrlCallBack(){
    console.log(window.location.hash)
    if(!window.location.hash){
      return '';
    }
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  public getAcessToken(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
    
  }

  async getSpotifyInfo(){
    const userInfo = await this.spotifyApi.getMe();
    this.user = spotifyUser(userInfo)
  }


 async searchPlaylistUser(offset = 0, limit = 50): Promise<IPlaylist[]>{
    const playlists = await this.spotifyApi.getUserPlaylists(this.user?.id, { offset, limit });
    return playlists.items.map(SpotifyPlaylisttoPlayList)
  }
}

 