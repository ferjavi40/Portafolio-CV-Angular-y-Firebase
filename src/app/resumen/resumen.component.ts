import { Component, OnInit } from '@angular/core';
import { FernandoCVService } from '../services/fernando-cv.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: FernandoCVService) { }

  ngOnInit(): void {
  }

}
