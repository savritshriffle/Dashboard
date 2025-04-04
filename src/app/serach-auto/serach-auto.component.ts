import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-serach-auto',
  templateUrl: './serach-auto.component.html',
  styleUrls: ['./serach-auto.component.css']
})
export class SerachAutoComponent implements OnInit{
  dataList: any[] =[];
  List: any;
  constructor(private service: ServiceService) {}
  ngOnInit(): void {
    this.service.getPosts().subscribe((data) => {
      this.dataList = data
      this.List = this.dataList.forEach((value) => {
        return value
      })

      console.log(this.List)
    })
  }

}
