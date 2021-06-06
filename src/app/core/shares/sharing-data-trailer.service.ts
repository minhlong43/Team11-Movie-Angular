import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharingDataTrailerService {
  private Trailer = new BehaviorSubject({} as Object);
  SharingTrailer = this.Trailer.asObservable();

  constructor() {}

  SharingDataTrailer(trailer): void {
    this.Trailer.next(trailer);
  }
}
