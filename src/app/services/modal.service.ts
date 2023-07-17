import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  hide() {
    return Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")).forEach((node, index, array) => (index !== array.length - 1) ? (<HTMLElement> node).style.display = "none" : true);
  }

  show() {
    return Array.from(document.querySelectorAll(".cdk-overlay-container .cdk-global-overlay-wrapper")).forEach((node) =>(<HTMLElement> node).style.display = "" );
  }
}
