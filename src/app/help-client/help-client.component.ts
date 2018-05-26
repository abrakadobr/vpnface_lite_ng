import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-client',
  templateUrl: './help-client.component.html',
  styleUrls: ['./help-client.component.css']
})
export class HelpClientComponent implements OnInit {

  public _cliOS:string = ''

  constructor() { }

  ngOnInit() {
  }

}
