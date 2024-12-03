import { Injectable } from '@angular/core';
import { Cycle } from '../models/cycle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CycleService {

  private  baseURL = "http://localhost:8080/api/cycles";

  constructor(private httpClient: HttpClient) { }
  cycleList(): Observable<Cycle[]>{
    return this.httpClient.get<Cycle[]>(`${this.baseURL}`);
  }
}

