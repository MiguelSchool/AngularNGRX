import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {currentUserActions} from "./auth/store/actions/CurrentUserActions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularNGRX';

  constructor(private store: Store) {
  }
  ngOnInit(): void {

    // @ts-ignore
    this.store.dispatch(currentUserActions());
  }
}
