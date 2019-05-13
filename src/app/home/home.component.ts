import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';
import { element } from 'protractor';
import {map, zip} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/zip";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
dataItem:any = [] 
dataItemm:any = [] 
resultant:any = []

constructor(private data: DataService) {
  
  this.data.getuserdetails().subscribe(item=>{
    console.log(item);
    this.dataItem=item;
    
//Making random images array
let imagex = [
  'https://www.pushpendra.net/wp-content/uploads/2017/09/How-To-Make-A-Blog-In-CodeIgniter.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpZvUba-8QLt_0p9rKx21abYy6t82oKYR5gZcdPYPcgiFHAoDj_w',
  'https://www.mobygames.com/images/moby300x300.png',
  'http://www.soidergi.com/wp-content/uploads/ph/thumb-photostock-vector-technical-blueprint-vector-blue-digital-background-with-geometric-design-elements-cubes-engineering.jpg',
  'https://www.purpleboxav.com/wordpress/wp-content/uploads/2017/10/technical-support-300x300.jpg',
  'https://static1.squarespace.com/static/59e6092abff2008e8dfea5d0/t/5c1951bdb8a04505ea3b7fbc/1545163212588/img-about-1.png?format=300w',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAimuoWXrJG_-2GT3BArgkAM_LPCMXmyWHq2upLSIkMJkXKv-A',
  'https://static1.squarespace.com/static/5b97f04675f9eec4571ca951/5be5c3e021c67c10a9d40d4d/5c5759f5e79c702440ab83ca/1549229906252/OFF+SCREEN+%282%29.png?format=300w',
  'http://edumanthan.in/images/logo/AAEAAQAAAAAAAATzAAAAJDUwNjJlMTIyLTA3MTQtNDg0Ni1hNmUyLTJmYzNmYmEwYTU2MA.png',
  'http://www.stonejunction.co.uk/images/cipr-awards-small.jpg'

]




this.resultant = this.dataItem.map(function(el, index) {
  var z = Object.assign({}, el);
  z.url = imagex[index];
  return z;
});
});
this.data.getblogdetails().subscribe(item=>{
  console.log(item);
  this.dataItem=item;
});
}
  ngOnInit()
  {

  }
}
