import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit {

  @ViewChild('slideshow') slideshow!: ElementRef<HTMLDivElement>; // Specify the type of ElementRef

  images = [
    { src: '../../../assets/images/slide1.jpg', alt: 'Image 1' },
    { src: '../../../assets/images/slide2.webp', alt: 'Image 2' }
    // Add more images as needed
  ];

  constructor() { }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    
    const slides = this.slideshow.nativeElement.querySelectorAll('.slide') as NodeListOf<HTMLElement>; // Cast to NodeListOf<HTMLElement>

    slides.forEach((slide: HTMLElement, index: number) => {
      gsap.from(slide, {
        scrollTrigger: {
          trigger: slide,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.5
      });
    });
  }
}
