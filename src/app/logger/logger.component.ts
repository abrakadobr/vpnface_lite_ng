import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Logentry } from '../logentry'
import { APIService } from '../api.service'

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  public _logs:Logentry[] = []

  constructor(private api: APIService) {}

  ngOnInit() {
    setInterval(()=>{
      this.updateLogs()
    },1000)
  }

  updateLogs()
  {
    this.api.lastLogs().subscribe((logs:Logentry[])=>{
      logs.forEach((l:Logentry)=>{
        this._logs.push(l)
      })
    })
  }

  say()
  {
    const sayings = [
      'Если ты это читаешь - ты и есть сопротивление',
      'Учись всегда - мир меняется быстрее тебя',
      'DIGITAL RESISTANCE',
      'Ты - это то, как ты сопротивляешься..',
      'TOR - не панацея. почитай про безопасность в TOR'
    ]
    var x = Math.floor((Math.random() * sayings.length))
    this._logs.push(new Logentry('log','~~',sayings[x]))
  }

}
