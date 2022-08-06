import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidebarService} from "@cc/services/sidebar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  state: boolean = false;
  subs: Subscription = new Subscription();
  constructor(private sidebarService: SidebarService) {

  }

  ngOnInit(): void {
    this.subs = this.sidebarService.getState().subscribe(state => {
      this.state = state;
    })
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  collapse(state: boolean) {
    this.sidebarService.setState(state);
  }
}
