import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  isLoading = false;

  constructor() {
  }

  ngAfterViewInit() {
    const el = '.swiper-container';
    const swiper = new Swiper(el, {
      // centeredSlides: true,
      direction: 'vertical',
      loop: true,
      infinite: true,
      freeMode: true,
      slidesPerView: 5,
      slidesToScroll: 1,
      keyboard: {
        enabled: true
      },
      mousewheel: {
        releaseOnEdges: true
      },
      freeModeSticky: true,
      on: {
        click() {
          const current = this;
          const isActive = current.clickedSlide.className.includes('swiper-slide-active');
          if (isActive) {
            console.log('isActive ', isActive);
          }
        }
      }
    });
  }

  openNav() {
    document.getElementById('menu').style.height = '100%';
  }

  closeNav() {
    document.getElementById('menu').style.height = '0%';
  }
}
