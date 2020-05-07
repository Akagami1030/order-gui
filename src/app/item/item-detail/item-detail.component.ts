import { Component, OnInit, Input } from '@angular/core';
import { IItem } from '../item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: IItem;
  pageTitle: string = `Item detail:`;
  id = this.route.snapshot.paramMap.get('id');
  errorMessage = '';
  _changeable: boolean = false;
  _createBtnVisibility: boolean = false;
  profileForm = this.formBuilder.group({
    name: [''],
    description: [''],
    price: [''],
    amountOfStock: ['']
  });
  constructor(private route: ActivatedRoute, private router: Router, private itemService: ItemService, private formBuilder: FormBuilder, private location: Location) { }


  ngOnInit(): void {
    
    this.pageTitle += this.id;
    if (this.id) {
      this.getItem(this.id);

    }

  }

  getItem(id: string) {
    this.itemService.getItem(id).subscribe({
      next: item => this.item = item,
      error: err => this.errorMessage = err
    });

  }

  onBack(): void {
    this.router.navigate(['/items']);
  }

  changeable(): void {
    this._changeable = !this._changeable;
    console.log(this._changeable)
  }

  onSubmit() {
  }

  updateItem(): void {
    //this.item = this.profileForm.value;
    this.itemService.updateItem(this.item).subscribe();
    alert(this.item.name + ' has been modified');
    this.onBack();
  }

}
