import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { APIService } from '../api.service'

@Component({
  selector: 'app-installer1',
  templateUrl: './installer1.component.html',
  styleUrls: ['./installer1.component.css']
})
export class Installer1Component implements OnInit {

  public _account:string = 'admin'
  public _err:string = ''
  public _cliOS = ''
  public _ip = ''
  public _load = false
  state:string = 'createacc'

  constructor(private api: APIService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.api._hasMenu = false
    this.api._title = 'Установка. шаг 2'
    this.api.loadServer('adm').subscribe((s)=>{
      if (!s.clients.length) {
        this.state = 'createacc'
      } else {
        this._account = s.clients[0].code
        this.state = 'wait10'
        this.nextPing()
      }
    })
  }

  createAcc()
  {
    let rx = /^[a-zA-Z][a-zA-Z0-9]{1,15}$/
    if (!rx.test(this._account))
    {
      this._err = 'Некорректно'
      setTimeout(()=>{
        this._err = ''
      },2000)
      return
    }
    this._load = true
    this.api.createKey('adm',this._account).subscribe((data)=>{
      this._load = false
      this.state = 'wait10'
      this.nextPing()
    })
  }

  grabKey()
  {
    this.api.grabKey(this._account+'@adm')
  }

  getCliSoft()
  {
  }

  nextPing()
  {
    console.log('next ping')
    this.api.ping10().subscribe({
      next: (ping)=>{
        console.log(['ping!',ping])
        window.location.replace('http://'+this.api._adminIP+':8808/install2')
      },
      error: (err)=>{
        console.log(err)
        setTimeout(()=>{
          this.nextPing()
        },1000)
      },
      complete: ()=>{
        //console.log('complete')
      }
    })
  }


}
