import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent {
  urlImage = "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci80YWI1YjNjOTg2MmZjOTFlNTFlMmU2ZjY5YTY2ZTk5Mz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.vn16SpUv_a299JVQYFcyqEx22Z2eknMUgaL2l2ilARU"
  showImage = true
  imageToggle() {
    this.showImage = !this.showImage
  }
}
