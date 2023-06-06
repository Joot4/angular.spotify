
import { Component , OnInit} from '@angular/core';
import { SpotifyServices } from '../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private spotifyServices:SpotifyServices, private router:Router){}

  ngOnInit(): void {
    this.verificationUrl();
  }

  public verificationUrl(){
    const token = this.spotifyServices.getTokenUrlCallBack();
    if(token){
      this.spotifyServices.getAcessToken(token);
      this.router.navigate(['/player']);
    }
    console.log(token)
  }

  public getOpenLogin(){
   window.location.href = this.spotifyServices.getUrlLogin();
  }

}
