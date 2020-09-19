import { Injectable } from '@angular/core';
import { leader } from '../shared/leader';
import { leaders } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): leader[] {
    return leaders;
  }
  getLeader(id:string): leader {
    return leaders.filter((leader) => (leader.id === id))[0];
  }
  getFeaturedLeader(): leader {
    return leaders.filter((leader) => leader.featured)[0];
  }
  constructor() { }
}
