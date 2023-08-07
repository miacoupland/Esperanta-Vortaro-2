import { Injectable } from '@angular/core';
import { Vortaro } from '../models/vortaro.model';
import { Observable } from 'rxjs';
import { VortaroRepository } from '../vortaro.repository';

@Injectable()
export class TranslationService {
  constructor(private repo: VortaroRepository) {}

  public addEntry(word: Vortaro): void {
    return this.repo.addEntry(word);
  }

  public getEntry(word: string): Observable<Vortaro> {
    return this.repo.getEntry(word);
  }
}
