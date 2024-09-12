import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [],
  templateUrl: './track.component.html',
  styleUrl: './track.component.scss'
})

export class TrackComponent implements OnInit {

  @ViewChild('trackCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {
    this.setupCanvas();
    this.drawTrack();
  }

  private setupCanvas(): void {
    const canvasEl = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d')!;
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
  }

  private drawTrack(): void {
    const { ctx } = this;

    // Set the track style
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    // Draw the track (simple loop for now)
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(500, 100);
    ctx.arcTo(700, 100, 700, 300, 100);
    ctx.lineTo(700, 500);
    ctx.arcTo(700, 700, 500, 700, 100);
    ctx.lineTo(100, 700);
    ctx.arcTo(50, 700, 50, 500, 100);
    ctx.lineTo(50, 300);
    ctx.arcTo(50, 100, 100, 100, 100);
    ctx.stroke();

    // Optional: Draw start/finish line
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(95, 95);
    ctx.lineTo(95, 105);
    ctx.stroke();
  }
}
