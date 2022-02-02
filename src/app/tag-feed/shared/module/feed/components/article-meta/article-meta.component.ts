import {Component, Input, OnInit} from '@angular/core';
import {Article} from "../../../../types/models/Article";

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css']
})
export class ArticleMetaComponent implements OnInit {
  @Input('article')articleProp: Article | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
