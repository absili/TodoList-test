import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleFormAdd = false;
  currentUrl = '';
  constructor(private router: Router  ) {
    this.router.events.subscribe((res) => {
        this.currentUrl = this.router.url;
    });
  }

  ngOnInit() {
   // this.currentUrl = this.router.url;
     //console.log("rt", this.router.url);
  }
  addTodoToggle(){
    this.toggleFormAdd = !this.toggleFormAdd;
  }

 
}
