import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormComponent } from 'src/app/home/form/form.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivatedGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component): boolean {
    if (
      !component.canDeactivate &&
      !localStorage.getItem('user') &&
      !localStorage.getItem('DKuser')
    ) {
      if (confirm('Bạn có muốn rời khỏi trang nay không')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
