import { Component, OnInit, Input } from '@angular/core';

import { Logentry } from '../logentry'

@Component({
  selector: 'app-logline',
  templateUrl: './logline.component.html',
  styleUrls: ['./logline.component.css']
})
export class LoglineComponent implements OnInit {

  @Input() lline:Logentry
  public state:string = 'visible'

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.toggleState()
    },35000)
  }

  toggleState()
  {
    this.state = this.state == 'visible' ? 'invislble' : 'visible'
  }

}
