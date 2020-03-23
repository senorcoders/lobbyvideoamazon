import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {
  lobbyvideo: any = 'http://lobbyvideoapi.senorcoders.com/videos/uscenes_wide_screen_marine.mp4';
  constructor(private routerA: ActivatedRoute) {}

  
  ngOnInit() {
    let reqs = this.routerA.params.subscribe((params) => {
      // This is how we can automatically go to another page based on the request
      // If the tab doesn't change in the navigation, page refreshes won't happen
      console.log("Params 1st: ", params['video']);
      //this.lobbyvideo = params['video'];
      
    }) ;
  }

}
