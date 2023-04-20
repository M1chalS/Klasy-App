import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '<h1 class="text-3xl my-3 self-center text-center w-full text-gray-300">\n' +
    '  <ng-content></ng-content>\n' +
    '</h1>'
})
export class TitleComponent {

  protected readonly parent = parent;
}
