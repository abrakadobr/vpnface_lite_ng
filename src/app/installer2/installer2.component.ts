import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service'

@Component({
  selector: 'app-installer2',
  templateUrl: './installer2.component.html',
  styleUrls: ['./installer2.component.css']
})
export class Installer2Component implements OnInit {

  constructor(private api: APIService) { }

  ngOnInit() {
    this.api._title = 'Установка. шаг 3'
    this.api._hasMenu = false
    setTimeout(()=>{
      this.api.finilizeInstall().subscribe((start)=>{})
    },5000)
  }

}
