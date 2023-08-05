import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslationService } from './shared/services/translation.service';

@Component({
  selector: 'vortaro',
  templateUrl: './vortaro.component.html',
  styleUrls: ['./vortaro.component.scss'],
})
export class VortaroComponent implements OnInit {
  public anglaForm!: FormGroup;
  public traduko: string = '';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.anglaForm = new FormGroup({
      angla: new FormControl(),
      esperanto: new FormControl(),
    });
  }

  public onSubmit(): void {
    this.translationService.getEntry('hundo').subscribe((v) => {
      this.traduko = `Angla: ${v.angla} Esperanto: ${v.esperanto}`;
    });
  }
}
