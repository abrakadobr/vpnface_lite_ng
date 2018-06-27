import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { APIService } from '../api.service'

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.css']
})

export class InstallerComponent implements OnInit {

  public _ip = ''
  public _load = false
  public _log = ''

  constructor(private api: APIService) { }

  ngOnInit() {
    this.api._title = 'Установка. шаг 1'
    this.api._hasMenu = false
    this._ip = window.location.hostname
  }

  confirmIP()
  {

    this._load = true
    this._log = 'Сохраняем адрес'
    this.api.confirmIP(this._ip).subscribe((data)=>{
      this.api._adminIP=data.admIP
      this._log = 'Создаётся администраторский VPN. Генерация ключей безопасности на слабых серверах может длиться до 10 минут. Не закрывайте эту страницу.'
    })
  }

}
