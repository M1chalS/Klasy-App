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
  searchValue: string = '';

  editMode = false;

  search = () => {
    this.http.get(`http://localhost:4000/klasy?klasa=${this.searchValue}`).subscribe((response) => {
      console.log(response);
      if(response) {
        this.data = response;
      }
    });
  }

  refreshData = () => {
    if(this.searchValue) {
      return this.search();
    }

    this.http.get('http://localhost:4000/klasy').subscribe((response) => {
      if(response) {
        this.data = response;
      }
    });
  };

  deleteUczen = (id: string) => {
    this.http.delete(`http://localhost:4000/klasy/uczen/${id}`).subscribe((res) => {
      this.refreshData();
    });
  }

  deleteKlasa = (id: string) => {
    this.http.delete(`http://localhost:4000/klasy/${id}`).subscribe((res) => {
      this.refreshData();
    });
  }

  ngOnInit(): void {
    this.refreshData();
  }
}





