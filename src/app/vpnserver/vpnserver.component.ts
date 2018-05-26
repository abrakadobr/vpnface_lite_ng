import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { MatPaginator, MatSort } from '@angular/material';
import { switchMap } from 'rxjs/operators'
import { APIService } from '../api.service'
import { Vpnserver } from '../vpnserver'
import { Vpnclient } from '../vpnclient'
import { VpnuserdialogComponent } from '../vpnuserdialog/vpnuserdialog.component'
import { WarnDialogComponent } from '../warn-dialog/warn-dialog.component'
import { ClientsTableDataSource } from './vpnserver.datasource'


@Component({
  selector: 'app-vpnserver',
  templateUrl: './vpnserver.component.html',
  styleUrls: ['./vpnserver.component.css']
})
export class VpnserverComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ClientsTableDataSource
  displayedColumns = ['blocked','code','actions'];

  srv: Vpnserver

  public _locked:any ={}

  constructor(public dialog: MatDialog,private api: APIService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.api._hasMenu = true
    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.reload(p.get('code'))
    })
  }

  reload(code:string)
  {
    this.api.loadServer(code).subscribe((srv)=>{
      this.srv = srv
      this.api._title = this.srv.name
      if (this.srv.type == 'public')
        this.api._ticon = 'cloud_queue'
      if (this.srv.type == 'root')
        this.api._ticon = 'cloud_off'
      if (this.srv.type == 'dark')
        this.api._ticon = 'cloud_circle'
      this.dataSource = new ClientsTableDataSource(this.srv.clients,this.paginator,this.sort)
      //this.dataSource = this.srv.clients
    })
  }

  addKey()
  {
    let d = this.dialog.open(VpnuserdialogComponent,{
      width: '75%',
      data: this.srv.code
    })
    d.afterClosed().subscribe((acc) => {
      if (acc)
        this.reload(this.srv.code)
    });
  }

  grabKey(key:string)
  {
    this.api.grabKey(key+'@'+this.srv.code)
  }

  lockKey(key:string)
  {
    let d = this.dialog.open(WarnDialogComponent,{
      width: '75%',
      data: {
        title: `Заблокировать ключ <${key}>?`,
        message: 'Пользователь не сможет подключиться к vpn серверу.<br/>Если пользователь подключён в данный момент - соединение будет разорвано.',
        ok: 'Заблокировать'
      }
    })
    d.afterClosed().subscribe((doLock:boolean=false)=>{
      if (!doLock)
        return
      this._locked[key]=true
      this.api.lockKey(key+'@'+this.srv.code).subscribe((res)=>{
        this.reload(this.srv.code)
        this._locked[key]=false
      })
    })
  }

  unlockKey(key:string)
  {
    let d = this.dialog.open(WarnDialogComponent,{
      width: '75%',
      data: {
        title: `Разблокировать ключ <${key}>?`,
        message: 'Пользователь сможет подключиться к vpn серверу.',
        ok: 'Разблокировать'
      }
    })
    d.afterClosed().subscribe((doUnLock:boolean=false)=>{
      if (!doUnLock)
        return
      this._locked[key]=true
      this.api.unlockKey(key+'@'+this.srv.code).subscribe((res)=>{
        this.reload(this.srv.code)
        this._locked[key]=false
      })
    })
  }

}
