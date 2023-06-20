import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VortaroRepository {
  private addURL: string;
  private getURL: string;

  constructor(private http: HttpClient) {
    this.addURL =
      'http://localhost:5000/api/esperantovortarocontroller/AddEntry';
    this.getURL =
      'http://localhost:5000/api/esperantovortarocontroller/GetEntry';
  }

  public addEntry(entry: Map<string, string>): Observable<Map<string, string>> {
    return this.http.post<Map<string, string>>(this.addURL, entry);
  }

  public getEntry(entry: string): Observable<Map<string, string>> {
    return this.http.post<Map<string, string>>(this.getURL, entry);
  }
}
