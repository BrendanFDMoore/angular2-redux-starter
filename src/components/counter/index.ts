import { Component, Input } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { RioButton } from '../button';

@Component({
  selector: 'rio-counter',
  template: `
    <div class="flexless">
      <div class="flex col-12">
        <rio-button
          className="bg-black col-2"
          (onClick)="decrement()">
          -
        </rio-button>

        <div class="flex-auto flex-center center h1">
          {{ counter }}
        </div>

        <rio-button className="col-2"
          (onClick)="increment()">
          +
        </rio-button>
      </div>
      <div class="flex col-12">
        <form #regForm="ngForm" 
          (ngSubmit)="onSubmit(regForm)" 
          class="flex-auto">

          <div class="flex-auto flex-center center">
            <input
              className="col-2"
              type="number"
              ngControl="incrementByValueCtrl" />
            <input
              className="col-2"
              type="checkbox"
              ngControl="incrementByNegativeCtrl" />
              <span class="h6">Negative? (Decrease)</span>
          </div>
          <div class="flex-auto flex-center center">
            <rio-button
              className="bg-black col-6"
              [type]="'submit'">
              Increase By
            </rio-button>
          </div>
        </form>
      </div>
    </div>
  `,
  directives: [RioButton, NgForm]
})
export class RioCounter {
  @Input() counter: number;
  @Input() increment: () => void;
  @Input() incrementBy: (value, negative) => void;
  @Input() decrement: () => void;

  onSubmit(regForm: NgForm) {
    this.incrementBy(
      regForm.value.incrementByValueCtrl, 
      regForm.value.incrementByNegativeCtrl
    );
  }
};
