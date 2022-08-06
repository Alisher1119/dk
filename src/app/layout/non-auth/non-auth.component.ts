import {Component, OnInit} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {rotateY} from "@cc/animations/rotate-y.animation";

@Component({
  selector: 'app-non-auth',
  templateUrl: './non-auth.component.html',
  styleUrls: ['./non-auth.component.scss'],
  animations: [
    rotateY
  ]
})
export class NonAuthComponent implements OnInit {

  loading: boolean = false;

  constructor(private contexts: ChildrenOutletContexts) {
    this.loading = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
