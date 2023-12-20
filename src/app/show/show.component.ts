import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [],
  templateUrl: './show.component.html'
})
export class ShowComponent {

  buttons=["😀","😢","🤪"];

  images =["https://i.pinimg.com/originals/f2/ce/c9/f2cec98f06e8f66ff0bcfb2ffdb413eb.jpg","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sad-dog-1537347496.jpg?resize=480:*","https://townsquare.media/site/757/files/2014/08/names.jpg"]

  

  showImage(emoji : string ){
    let imgTag = document.createElement("img");

    if (emoji === this.buttons[0]) {
      imgTag.setAttribute("src", this.images[0]);
      document.body.appendChild(imgTag);
    }else if(emoji === this.buttons[1]){
      imgTag.setAttribute("src", this.images[1]);
      document.body.appendChild(imgTag);
    }else {
      imgTag.setAttribute("src", this.images[2]);
      document.body.appendChild(imgTag);
    }
  }



}
