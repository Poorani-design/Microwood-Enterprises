import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  breakpoints = {
    200:{slidersPerview:3,spaceBetween:20},
    500:{ slidesPerView: 3, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    800:{slidesPerView:4,spaceBetween:20},
    1024: { slidesPerView: 5, spaceBetween: 10 },
    1200:{ slidesPerView: 6, spaceBetween: 10 }
  };
}
