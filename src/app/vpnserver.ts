import {Vpnclient} from './vpnclient'

export class Vpnserver {

  constructor(
    public code:string = '',
    public name:string = '',
    public type:string = '',
    public friends:boolean = false,
    public maxclients:number = 100,
    public logs:boolean = false,
    public network:any = {},
    public intranet:any = {},
    public cert:any = {},
    public clients: Vpnclient[] = []
  ){}
}
