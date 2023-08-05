import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vortaro } from '../models/vortaro.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class TranslationService {
  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  public getEntry(word: string): Observable<Vortaro> {
    return this.http
      .post<Vortaro>(
        'https://localhost:5001/api/EsperantaVortaro/GetEntry',
        `"${word}"`,
        this.options
      )
      .pipe(
        map((v: Vortaro): Vortaro => {
          return v;
        })
      );
  }
}
