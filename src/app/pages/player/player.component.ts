import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyServices } from '../services/spotify.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit{
  showPageContent = false;

constructor(private router: Router, private spotifyService: SpotifyServices) { }

ngOnInit() {
  this.checkAuth();
}

 public checkAuth(){
  const token = localStorage.getItem('token');

   if(!token) {
     return this.notAuth();
  }
   return new Promise((res) =>{
    const userCreated = this.spotifyService.initService();
    if(userCreated){
      res(true)
    }else{
      res(this.notAuth())
    }
   })
 }

  public notAuth() {
    localStorage.clear();
    this.showPageContent = false;
    this.router.navigate(['/login']);
  }
}

