import {Component, Input, OnInit} from '@angular/core';
import {PopularTagType} from "../../../../../../shared/types/PopularTagType";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input('tags')tagsListProps: PopularTagType[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
