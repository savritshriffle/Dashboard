import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{
  public profile: any = [];
  constructor(private service: DataService) { }
  ngOnInit(): void {
    this.service.getUsreData().subscribe((data) => {
      this.profile = data;
      console.log(this.profile)
    })
  }


}
