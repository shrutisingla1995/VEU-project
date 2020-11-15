import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-previous-posts',
  templateUrl: './previous-posts.component.html',
  styleUrls: ['./previous-posts.component.scss']
})
export class PreviousPostsComponent implements OnInit {
  imageDataArr=[
    {
      id:'bg1',
      bg:"/assets/images/picture8.jpg",
      text1:'Landscape Photography',
      text2:'Composition Rules You Need to',
      text3:'Start Using Today',
      by:'JOHNNY WALKER',
      date:'21st February, 2019'
    },
    {
      id:'bg2',
      bg:"/assets/images/picture9.jpg",
      text1:'Landscape Photography',
      text2:'Composition Rules You Need to',
      text3:'Start Using Today',
      by:'JOHNNY WALKER',
      date:'21st February, 2019'
    },
    {
      id:'bg3',
      bg:"/assets/images/picture10.jpg",
      text1:'Landscape Photography',
      text2:'Composition Rules You Need to',
      text3:'Start Using Today',
      by:'JOHNNY WALKER',
      date:'21st February, 2019'
    }
  ]
  constructor(  private router: Router
    ) { }

  ngOnInit(): void {
  }
  openPost(){
    this.router.navigateByUrl('/posts');
  }

}
