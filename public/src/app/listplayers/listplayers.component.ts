import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../player';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService} from '../http.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listplayers',
  templateUrl: './listplayers.component.html',
  styleUrls: ['./listplayers.component.css']
})
export class ListplayersComponent implements OnDestroy {
  subscription: Subscription;
  players: Array<Player>;
  thisPlayer: Player;
  deleteId: String;
  constructor(private _httpService: HttpService, private _router: Router) {
    this.subscription = _httpService.observedplayers.subscribe(
        (updatedplayers)=>{this.players = updatedplayers;},
        (err)=>{},
        ()=>{}
    )
  }
  ngOnInit(){
    this.getallplayers();
  }
  deleteThis(id){
    //console.log('in the delete function (component)');
    //console.log('this is the id', id)
    this.deleteId = id;
    this._httpService.getThisplayer(this.deleteId)
      .then((player)=>{
        //console.log('successfully got player:', player._id)
        this.thisPlayer = player;
        if (window.confirm(`Are you sure you want to delete this member
          ${this.thisPlayer.name}`)){
            this._httpService.deleteplayer(this.thisPlayer);
            // this._router.navigate(['players/list/'])
            this.getallplayers();
            this.updateplayers();
        }
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
