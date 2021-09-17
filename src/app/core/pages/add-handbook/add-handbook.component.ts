import { Component, OnInit } from '@angular/core';
import { sidebarMenu } from '../../constants/sidebar';

@Component({
  selector: 'app-add-handbook',
  templateUrl: './add-handbook.component.html',
  styleUrls: ['./add-handbook.component.scss']
})
export class AddHandbookComponent implements OnInit {

  constructor() { }
  sidebarMenu = sidebarMenu;
  ngOnInit(): void {
  }
  search(){
    console.log("izvrsi pretragu");
  }

}
