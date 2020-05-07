import { Component, OnInit } from '@angular/core';
import { IItem } from './item';
import { ItemService } from './item.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreateItem } from './create-item/create-item';

@Component({
  //selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: string;
  name: string;
  descritpion: string;
  price: string;
  amountOfStock: number;
  stockUrgency: string;
  items: IItem[];
  filteredItems: IItem[];
  _listFilter: string;
  errorMessage: string;

  constructor(private itemService: ItemService, private router: Router) {
    
   }

  get listFilter(): string{
      return this._listFilter;
  }

  
   set listFilter(value : string) {
    this._listFilter = value;
    this.filteredItems = this.listFilter ? this.performFilter(this.listFilter) : this.items;
  }
  


  ngOnInit(): void {
    this.itemService.getItems().subscribe({
      next: items => {this.items = items;
        this.filteredItems = this.items;},
      error: err => this.errorMessage = err
  });
  
  }


  call():void {
    console.log('test');
    console.log(this.itemService.getItems());
    this.itemService.getItems().subscribe({
      next: items => this.items = items,
      error: err => this.errorMessage = err
  });
  }

  goToCreatComponent(): void{
      this.router.navigate(['/addItem'])
  }

  performFilter(filterBy: string): IItem[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((item: IItem) =>
    item.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
}
