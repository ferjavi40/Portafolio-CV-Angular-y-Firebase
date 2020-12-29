import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FernandoCVService {
  profesional: any [] = [];
  educacion: any [] = [];
  experiencia: any [] = [];
  testimonio: any[] = [];

  constructor( private http:HttpClient) { 
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarExperiencia();
    this.CargarTestimonio();
  }

  private CargarProfesional(){
    this.http.get('https://angularcv-39be2-default-rtdb.firebaseio.com/Profesional.json')
    .subscribe((resp: any[])=>{
      this.profesional= resp;
      // console.log(resp);
    })
  }

  private CargarEducacion(){
    this.http.get('https://angularcv-39be2-default-rtdb.firebaseio.com/educacion.json')
    .subscribe((resp: any[])=>{
      this.educacion= resp;
      // console.log(resp);
    })
  }

  private CargarExperiencia(){
    this.http.get('https://angularcv-39be2-default-rtdb.firebaseio.com/Experiencia.json')
    .subscribe((resp: any[])=>{
      this.experiencia= resp;
      // console.log(resp);
    })
  }

  private CargarTestimonio(){
    this.http.get('https://angularcv-39be2-default-rtdb.firebaseio.com/testimonio.json')
    .subscribe((resp: any[])=>{
      this.testimonio= resp;
      console.log(resp);
    })
  }

}
