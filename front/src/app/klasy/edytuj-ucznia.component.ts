import { Component, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'edytuj-ucznia',
  template: '<input [(ngModel)]="imie" name="imie" placeholder="Imie" ' +
    '         class="rounded-md w-36 p-2 text-gray-900 mx-2" (blur)="edytujUcznia()"/>\n' +
    '        <input [(ngModel)]="nazwisko" name="nazwisko" placeholder="Nazwisko" ' +
    '         class="rounded-md w-36 p-2 text-gray-900" (blur)="edytujUcznia()"/>\n'
})
export class EdytujUczniaComponent {
  constructor(private http : HttpClient){
  }

  @Input() id: string = "";
  @Input() imie: string = "";
  @Input() nazwisko: string = "";
  @Input() refreshData: () => void = () => {};

  edytujUcznia(): void {
    this.http.put(`http://localhost:4000/klasy/uczen/${this.id}`, {imie: this.imie, nazwisko: this.nazwisko}).subscribe((res) => {
      this.refreshData();
    });
  }
}





