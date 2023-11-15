import { Observable } from 'rxjs';
import { Forfait } from '../Models/Forfait';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(private http: HttpClient) { }

  getAll<Forfait>():Observable<Forfait[]>{
    return this.http.get<Forfait[]>('https://localhost:7214/Forfait');
  }
}
