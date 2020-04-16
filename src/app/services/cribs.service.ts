import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  private dataURL = 'data/cribs.json';

  public newCribSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllCribs(): Observable<any>{
    return this.http.get(this.dataURL);
  }

  addCrib(data): void {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}
