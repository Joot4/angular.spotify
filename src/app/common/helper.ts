import { IPlaylist } from "../pages/interface/IPlaylist";
import { IUser } from "../pages/interface/IUser";




export function spotifyUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser{

  return {
    id:user.id,
    nome:user.display_name,
    imagemUrl: user.images.pop().url
  }

}

export function SpotifyPlaylisttoPlayList(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
  return{
    id:playlist.id,
    nome: playlist.name,
    imageUrl:playlist.images.pop().url
  }
}