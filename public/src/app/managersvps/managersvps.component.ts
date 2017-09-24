
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Player } from '../player'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService} from '../http.service';
import { Subscription } from 'rxjs/Subscription'
import { Router } from '@angular/router'

@Component({
  selector: 'app-managersvps',
  templateUrl: './managersvps.component.html',
  styleUrls: ['./managersvps.component.css']
})
export class ManagersvpsComponent implements OnInit {
  thisGame: object = {
    number: 1,
    abbr: 'game1'
  }
  players: Array<Player>
  subscription: Subscription
  thisPlayer: Player
  updateId: string;
  constructor(private _httpService: HttpService, private _router: Router) {
    this.subscription = _httpService.observedplayers.subscribe(
        (updatedplayers)=>{this.players = updatedplayers;},
        (err)=>{},
        ()=>{}
    )
   }

  ngOnInit() {
    this.getallplayers();
  }
  switchgame(num){
    this.thisGame = {
      number: num,
      abbr: 'game' + num
    }
  }
  switchrsvp(num, rsvp, playerid){
    //console.log('in the switch RSVP function (component)');
    //console.log('this is the id', playerid)
    this.updateId = playerid;
    this._httpService.getThisplayer(this.updateId)
      .then((player)=>{
        //console.log('successfully got player:', player._id)
        this.thisPlayer = player;
        //console.log("current rsvp", this.thisPlayer.status["game" + num])
        this.thisPlayer.status["game" + num] = rsvp;
        //console.log("new rsvp", this.thisPlayer.status["game" + num])
        this._httpService.updateplayer(this.thisPlayer);
        this.getallplayers();
      })
      .catch((err)=>{
        console.log("so there's this problem:", err)
      })
  }
  getallplayers(){
    this._httpService.getAllplayers()
    .then((players)=>{
        this.players = players;
        this.updateplayers();
      })
      .catch((err)=>console.log(err));
  }
  updateplayers(){
    this._httpService.updateplayers(this.players)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
