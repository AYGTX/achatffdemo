import { Observable } from 'rxjs';
import { Forfait } from '../Models/Forfait';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  getAll<Phone>():Observable<Phone[]>{
    return this.http.get<Phone[]>('https://localhost:7214/Forfait/PhoneList');
  }
}
