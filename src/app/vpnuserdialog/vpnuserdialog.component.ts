import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { APIService } from '../api.service'

@Component({
  selector: 'app-vpnuserdialog',
  templateUrl: './vpnuserdialog.component.html',
  styleUrls: ['./vpnuserdialog.component.css']
})
export class VpnuserdialogComponent {

  public _account: string = ''
  public _err:string = ''
  public _lock:boolean = false

  constructor(private api:APIService,public dialogRef: MatDialogRef<VpnuserdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  keyDownF(e) {
    if(e.keyCode == 13)
      this.go()
  }

  go()
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
    this._lock = true
    this.api.createKey(this.data,this._account).subscribe((k2)=>{
      this.dialogRef.close(this._account)
    })
  }
}
