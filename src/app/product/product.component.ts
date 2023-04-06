import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  breakpoints = {
    400:{slidersPerview:1,spaceBetween:10},
    500:{ slidesPerView: 2, spaceBetween: 2 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    800:{slidesPerView:4,spaceBetween:20},
    1024: { slidesPerView: 5, spaceBetween: 10 },
    1200:{ slidesPerView: 6, spaceBetween: 10 }
  };
}
