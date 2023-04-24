import { Component, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'dodaj-ucznia',
  template: '<form class="flex flex-row" (submit)="dodajUcznia()">\n' +
    '            <input [(ngModel)]="imie" name="imie" placeholder="Imie" class="rounded-md w-36 p-2 text-gray-900 mx-2"/>\n' +
    '            <input [(ngModel)]="nazwisko" name="nazwisko" placeholder="Nazwisko" class="rounded-md w-36 p-2 text-gray-900"/>\n' +
    '            <button type="submit">\n' +
    '              <mat-icon class="text-2xl m-2">add</mat-icon>\n' +
    '            </button>\n' +
    '          </form>'
})
export class DodajUczniaComponent {
  constructor(private http : HttpClient){
  }

  @Input() id: string = "";

  imie: string = "";
  nazwisko: string = "";

  @Input() refreshData: () => void = () => {};

  dodajUcznia(): void {
    this.http.post(`http://localhost:4000/klasy/uczen/${this.id}`, {imie: this.imie, nazwisko: this.nazwisko}).subscribe((res) => {
      this.refreshData();
    });
  }
}





