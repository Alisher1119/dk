import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  url: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.subscribe(url => {
      for (let u of url) {
        this.url.push(u.path);
      }
    });
  }

  ngOnInit(): void {
  }

}
