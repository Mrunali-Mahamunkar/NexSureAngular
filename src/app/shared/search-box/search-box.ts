import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports:[FormsModule],
  templateUrl:'./search-box.html',
  styleUrl:'./search-box.scss'
})
export class SearchBox {

  @Output()

  search=new EventEmitter<string>();

  searchText="";

}