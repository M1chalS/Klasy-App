import { Component, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'edytuj-klase',
  template: '<input [(ngModel)]="name" name="name" placeholder="Nazwa klasy" ' +
    'class="rounded-md w-36 p-2 text-gray-900 mx-2" (blur)="edytujKlase()"/>\n'
})
export class EdytujKlaseComponent {
  constructor(private http : HttpClient){
  }

  @Input() id: string = "";
  @Input() name: string = "";

  @Input() refreshData: () => void = () => {};

  edytujKlase(): void {
    this.http.put(`http://localhost:4000/klasy/${this.id}`, {name: this.name}).subscribe((res) => {
      this.refreshData();
    });
  }
}





