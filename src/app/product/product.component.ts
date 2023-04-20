import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
  
  breakpoints = {
    400:{slidersPerview:1,spaceBetween:20},
    500:{ slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    800:{slidesPerView:4,spaceBetween:20},
    1024: { slidesPerView: 5, spaceBetween: 20 },
    1200:{ slidesPerView: 5, spaceBetween: 20 }
  };
  images: any;
  
  ngOnInit(){
    this.images =[
      // '../../assets/images/product-slider-compressed/microwood_enterprises_1-min.jpg',
      // '../../assets/images/product-slider-compressed/microwood_enterprises_2-min.jpg',
      // '../../assets/images/product-slider-compressed/microwood_enterprises_3-min.jpg',
      // '../../assets/images/product-slider-compressed/microwood_enterprises_4-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_5-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_6-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_7-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_8-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_9-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_10-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_11-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_12-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_13-min.jpg',
      '../../assets/images/product-slider-compressed/microwood_enterprises_14-min.jpg'
  
    ]
  }
}

 
