import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private api: APIService) {}

  ngOnInit() {
    this.api._title = 'Справка'
    this.api._ticon = 'help'
    this.api._hasMenu = true
  }

}
