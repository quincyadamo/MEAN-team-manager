import { Component, OnDestroy } from '@angular/core';
import { Player } from '../player'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService} from '../http.service';
import { Subscription } from 'rxjs/Subscription'
import { Router } from '@angular/router'

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnDestroy {
  subscription: Subscription;
  players: Array<Player>;
  newPlayer: Player = new Player();
  constructor(private _httpService: HttpService, private _router: Router) {
    this.subscription = _httpService.observedplayers.subscribe(
        (updatedplayers)=>{this.players = updatedplayers;},
        (err)=>{},
        ()=>{}
    )
  }
  addPlayer(){
    this._httpService.createplayer(this.newPlayer)
    .then((success)=>{
      this.updateplayers();
      this.newPlayer = new Player();
      this._router.navigate(['players/list/'])
    })
    .catch((err)=>{
      console.log('add player error caught');
      console.log(err.json())
    })
  }
  updateplayers(){
    this._httpService.updateplayers(this.players);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
