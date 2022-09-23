import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  title='Blog'
  blogs:Blogpost;
  error:{};
  constructor(private titleService : Title, private blogServices : BlogpostService) { }
  
  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.blogServices.getBlogs().subscribe(
      (data:Blogpost)=>this.blogs = data,
      error => this.error = error
    );
    console.log("===blog",this.blogs);
  }
  

}
