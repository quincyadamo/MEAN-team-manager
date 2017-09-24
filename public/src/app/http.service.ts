import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Player } from './player'; 

@Injectable()

export class HttpService {
  observedplayers = new BehaviorSubject(null);
  constructor(private _http: Http) {}
  //interact with database
  getAllplayers() {
    return this._http.get('/dbplayers')
    .map( data => data.json() )
    .toPromise();
  }
  getThisplayer(id) {
    //console.log('trying to get this player', id)
    return this._http.get(`/dbplayers/${id}`)
    .map( data => data.json() )
    .toPromise();
  }
  createplayer(player) {
    return this._http.post('/dbplayers/add', player)
    .map( data => data.json() )
    .toPromise();
  }
  updateplayer(player) {
    return this._http.post(`/dbplayers/update/`, player)
    .map( data => data.json() )
    .toPromise();
  }
  deleteplayer(id) {
    //console.log('httpservice is trying to delete the id ', id)
    return this._http.post(`/dbplayers/delete/`, id)
    .map( data => data.json() )
    .toPromise();
  }
  //update subscription
  updateplayers(players: Array<Player>){
    this.observedplayers.next(players);
  }
}