import {Component, OnDestroy, OnInit} from '@angular/core';
import {SidebarService} from "@cc/services/sidebar.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit, OnDestroy {

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
