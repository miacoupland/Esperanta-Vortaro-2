import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vortaro } from './models/vortaro.model';

@Injectable()
export class VortaroRepository {
  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private addURL: string;
  private getURL: string;

  constructor(private http: HttpClient) {
    this.addURL = 'https://localhost:5001/api/EsperantaVortaro/AddEntry';
    this.getURL = 'https://localhost:5001/api/EsperantaVortaro/GetEntry';
  }

  public addEntry(entry: Vortaro): void {
    this.http
    .post<string>(this.addURL, entry, this.options)
    .subscribe(
      (response) => {
        console.log('Response from server:', response);
        
      },
      (error) => {
        console.error('Error while adding entry:', error);
      }
    );
  }

  public getEntry(entry: string): Observable<Vortaro> {
    return this.http.post<Vortaro>(
      `${this.getURL}`,
      `"${entry}"`,
      this.options
    );
  }
}
