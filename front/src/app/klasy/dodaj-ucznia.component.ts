import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'dodaj-ucznia',
  template: '<form class="flex flex-row items-center justify-center" (submit)="dodajUcznia(id)">\n' +
    '            <input placeholder="Dodaj ucznia" class="rounded-md p-2"/>\n' +
    '            <button type="submit">\n' +
    '              <mat-icon class="text-2xl m-2">check</mat-icon>\n' +
    '            </button>\n' +
    '          </form>'
})
export class DodajUczniaComponent implements OnInit{
  constructor(private http : HttpClient){
  }

  id: string = "";

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





