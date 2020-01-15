import { Injectable } from "@angular/core";
import { Goal } from "../goal";

@Injectable({
  providedIn: "root"
})
export class GoalService {
  // goals: Goal[]=[
  //   new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,9,14)),
  //   new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
  //   new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2019,1,12)),
  //   new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,11,18)),
  // ];
  getGoals() {
    return Goal;
  }

  constructor() {}
}
