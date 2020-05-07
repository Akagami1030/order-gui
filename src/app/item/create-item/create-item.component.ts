import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ICreateItem } from './create-item';
import { CounterService } from 'src/app/shared/counter.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  item: ICreateItem = { name: null, price: null, description: null, amountOfStock: null };
  public lengthDescription: number = 0;
  profileForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    price: ['', [Validators.required, Validators.min(5)]],
    amountOfStock: ['', [Validators.required, Validators.min(5)]]
  });




  constructor(private itemService: ItemService, private location: Location, private formBuilder: FormBuilder, private counterService: CounterService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  onSubmit() {
    console.warn(this.profileForm.value);
    this.addItem();
  }


  addItem(): void {
    this.item = this.profileForm.value;
    this.itemService.postItem(this.item).subscribe();
    alert(`${this.profileForm.get('name').value} has been added!`);
    this.goBack();
  }

  checkDescription(): void {
    this.item.description = this.profileForm.get('description').value;
    this.counterService.verifySize(this.item.description);
    this.lengthDescription = this.counterService.getCounter
    console.log(this.counterService.getCounter);
    this.changeColor(this.counterService.getCounter);

  }

  changeColor(number: number): void {
    if (number < this.counterService.getMax) {
      document.getElementById('descriptionId').style.color = 'Black';
    }
    else {
      document.getElementById('descriptionId').style.color = 'Red';
    }

  }


}
