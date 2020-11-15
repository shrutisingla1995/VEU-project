import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {
  bg2="/assets/images/picture2.jpg";
  bg3="/assets/images/picture3.jpg";
  bg4="/assets/images/picture4.jpg";
  bg5="/assets/images/picture5.jpg";
  bg6="/assets/images/picture6.jpg";
  bg7="/assets/images/picture7.jpg";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openPost(){
    this.router.navigateByUrl('/posts');
  }
}
