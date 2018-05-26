import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private api: APIService) { }

  ngOnInit() {
    this.api._title = 'Загрузка'
  }

}
