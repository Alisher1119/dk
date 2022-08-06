import {Component, Input, OnInit} from '@angular/core';
import {APP_NAME} from "@cc/constants/app.constants";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() type: string = ''
  appName = APP_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
