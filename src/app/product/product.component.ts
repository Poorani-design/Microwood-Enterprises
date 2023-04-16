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
    400:{slidersPerview:1,spaceBetween:10},
    500:{ slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    800:{slidesPerView:4,spaceBetween:20},
    1024: { slidesPerView: 5, spaceBetween: 10 },
    1200:{ slidesPerView: 6, spaceBetween: 10 }
  };
  images: any;
  
  ngOnInit(){
    this.images =[
      '../../assets/images/product-slider/microwood_enterprises_1.jpg',
      '../../assets/images/product-slider/microwood_enterprises_2.jpg',
      '../../assets/images/product-slider/microwood_enterprises_3.jpg',
      '../../assets/images/product-slider/microwood_enterprises_4.jpg',
      '../../assets/images/product-slider/microwood_enterprises_5.jpg',
      '../../assets/images/product-slider/microwood_enterprises_6.jpg',
      '../../assets/images/product-slider/microwood_enterprises_7.jpg',
      '../../assets/images/product-slider/microwood_enterprises_8.jpg',
      '../../assets/images/product-slider/microwood_enterprises_9.jpg',
      '../../assets/images/product-slider/microwood_enterprises_10.jpg',
      '../../assets/images/product-slider/microwood_enterprises_11.jpg',
      '../../assets/images/product-slider/microwood_enterprises_12.jpg',
      '../../assets/images/product-slider/microwood_enterprises_13.jpg',
      '../../assets/images/product-slider/microwood_enterprises_14.jpg'
  
    ]
  }
}

 
