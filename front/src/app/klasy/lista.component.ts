import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit{
  constructor(private http : HttpClient){
  }

  data: any = [];

  dodajUcznia(id: string): void {
    this.http.post(`http://localhost:4000/klasy/uczen/${id}`, {}).subscribe((res) => {

    });
  }

  ngOnInit(): void {
    this.http.get('http://localhost:4000/klasy').subscribe((response) => {
      console.log(response);
      if(response) {
        this.data = response;
      }
    });
  }
}





