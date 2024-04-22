import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GASP_Burim-Kryezi';

  ngOnInit(): void {
    // GSAP animation for the navigation bar
    gsap.from('nav', { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('nav .navbar-brand', { x: -50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from('nav .navbar-nav', { x: 50, opacity: 0, duration: 1, delay: 0.5 });
  }

}
