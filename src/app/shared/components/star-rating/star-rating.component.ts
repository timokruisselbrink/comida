import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  public stars:Array<number> =[1,2,3,4,5];

  @Output() selectedStarUpdated = new EventEmitter;

  constructor() { }

  onSelectionChange(star:number){
    this.selectedStarUpdated.emit(star);
  }

  ngOnInit() {
  }

}
