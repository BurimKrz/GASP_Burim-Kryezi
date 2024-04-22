import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    this.animateOnLoad();
  }

  private animateOnLoad(): void {
    gsap.from('.hero-title, .hero-subtitle, .hero-button', { opacity: 0, duration: 1, y: -50, stagger: 0.2 });
  }
  }


