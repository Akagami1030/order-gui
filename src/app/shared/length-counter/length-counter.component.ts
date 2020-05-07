import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-length-counter',
  templateUrl: './length-counter.component.html',
  styleUrls: ['./length-counter.component.css']
})
export class LengthCounterComponent implements OnInit {
  private counter: number;
  private maxLength = 255;
  constructor(private counterService: CounterService) { }

  increaseCounter(text: string): void{
    this.counterService.verifySize(text);
  }

  ngOnInit(): void {
  }

}
