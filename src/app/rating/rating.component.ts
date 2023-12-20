import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  // listStars = ["fa-solid fa-star","fa-solid fa-star-half-stroke","fa-regular fa-star"]
  listRate : number[] = [0,0,0,0,0]

  @Input() stars: number = 0;


  fillStars(){
    if (this.stars) {
      
    }
  }


  ngOnInit(): void {

    this.fillStars
    
  }

}
