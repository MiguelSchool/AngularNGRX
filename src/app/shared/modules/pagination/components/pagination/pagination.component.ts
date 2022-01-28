import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from "../../../../services/utils.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input('total')totalProps:number | undefined;
  @Input('limit')limitProps:number | undefined;
  @Input('currentPage')currentPageProps: number | undefined;
  @Input('url')urlProps:string | undefined;

  pagesCount: number | undefined;
  pages: number[] | undefined;
  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    if (this.totalProps && this.limitProps){
      this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
      this.pages = this.utilsService.range(1,this.pagesCount);
    }

  }

}
