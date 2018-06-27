import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Observable } from 'rxjs';
import { APIService } from './api.service'
import { VpnuserdialogComponent } from './vpnuserdialog/vpnuserdialog.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'app'
  _status: string = 'none'
  _menu: any[] = []
  _hs:boolean = true
  _doNext:boolean = true
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(private router: Router,private breakpointObserver: BreakpointObserver,private api: APIService) {
    this.updateStatus()
    this.isHandset.subscribe((d:any)=>{
      this._hs = d.matches
    })
  }

  updateServers(cb)
  {
    this.api.loadServers().subscribe((data:any)=>{
      this._menu = this.api.serversList()
      cb()
    })
  }

  goto(srvCode:string,drawer:any)
  {
    if (this._hs)
      drawer.toggle()
    this.router.navigate(['vpn',srvCode])
  }

  updateStatus()
  {
    this.api.loadStatus().subscribe((data:any)=>{
      if (this._status != data.status)
        this.setStatus(data.status)
      if (this._doNext)
        setTimeout(()=>{
          this.updateStatus()
        },1000)
    })
  }

  setStatus(st:string='none')
  {
    //special single case on install finished
    if (this._status == 'install2' && st == 'ready')
    {
      window.location.replace('http://'+this.api._adminIP+'/vpn/adm')
      return
    }
    this._status = st
    //this._status = 'install2'
    //this._doNext = false
    //console.log(['setStatus',this._status])

    if (this._status == 'install0')
      return this.router.navigate(['install'])

    if (this._status == 'install1')
      return this.router.navigate(['install1'])

    if (this._status == 'install2')
      return this.router.navigate(['install2'])

    if (this._status == 'ready')
    {
      this._doNext = false
      this.updateServers(()=>{
        this.api._mtitle='Сервера'
        this.api._hasMenu = true
        this.router.navigate(['vpn/inet'])
      })
    }

  }

}
