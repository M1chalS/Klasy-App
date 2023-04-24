import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  klasaName: string = "";
  loading: boolean = false;
  error: string|null = "";
  success: boolean = false;

  constructor(private http : HttpClient){
  }

  createKlasa = async () => {
    this.loading = true;
    this.http.post("http://localhost:4000/klasy", { name: this.klasaName })
        .subscribe((res: {error?: string, klasa?: Object}) => {
          this.loading = false;

          if(res.error) {
            this.error = res.error;
            this.success = false;
          }

          if(res.klasa) {
            this.error = null;
            this.success = true;
          }

    });
  };
}
