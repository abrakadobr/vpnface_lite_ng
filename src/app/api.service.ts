import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Vpnserver } from './vpnserver'
import { Logentry } from './logentry'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  public _status:string = 'none'
  public _servers:any = null
  public _title:string = ''
  public _ticon:string = ''
  public _mtitle:string = ''
  public _hasMenu:boolean = true
  public _load:string = ''
  constructor(private http:HttpClient) { }

  //common
  lastLogs()
  {
    return this.http.get<Logentry[]>('/api/logs')
  }

  loadStatus()
  {
    return new Observable<any>((o)=>{
      this.http.get<any>('/api/status/').subscribe((data)=>{
        this._status = data.status
        o.next(data)
        o.complete()
      })
    })
  }

  //SERVERS
  serversCodes()
  {
    if (!this._servers)
      return []
    return Object.keys(this._servers)
  }
 
  serversList()
  {
    let ret = []
    let codes = this.serversCodes()
    codes.forEach((c)=>{
      let o = {
        code: c,
        name: this._servers[c].name,
        cloud: 'cloud_off'
      }
      if (this._servers[c].type == 'root')
        o.cloud = 'cloud_off'
      if (this._servers[c].type == 'public')
        o.cloud = 'cloud_queue'
      if (this._servers[c].type == 'dark')
        o.cloud = 'cloud_circle'
      ret.push(o)
    })
    return ret
  }

  loadServers()
  {
    return new Observable<any>((o)=>{
      this.http.get<any>('/api/vpnlist').subscribe((data)=>{
        this._servers = data
        o.next(data)
        o.complete()
      })
    })
  }
 

  loadServer(code:string)
  {
    return this.http.get<Vpnserver>('/api/server/'+code)
  }

  //KEYS
  grabKey(key)
  {
    window.open('/api/ovpn/'+key,'_blank')
  }

  createKey(server:string,name:string)
  {
    return new Observable<any>((o)=>{
      this.http.post<any>('/api/gencli',{
        srv: server,
        cli: name
      }).subscribe((d)=>{
        this.loadServers().subscribe((dd)=>{
          o.next(d)
          o.complete()
        })
      })
    })
  }

  lockKey(key)
  {
    return this.http.get<any>('api/lock/'+key)
  }

  unlockKey(key)
  {
    return this.http.get<any>('api/unlock/'+key)
  }

  //install
  finilizeInstall()
  {
    return this.http.get<any>('http://10.1.0.1:8808/api/finilize')
  }

  ping10()
  {
    return this.http.jsonp<any>('http://10.1.0.1:8808/api/ping','cb')
  }

  confirmIP(ip:string)
  {
    return this.http.post<any>('/api/confirmip',{ip:ip})
  }


}
