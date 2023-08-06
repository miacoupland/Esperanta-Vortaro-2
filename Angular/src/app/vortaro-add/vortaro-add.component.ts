import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslationService } from '../shared/services/translation.service';
import { Vortaro } from '../shared/models/vortaro.model';

@Component({
  selector: 'vortaro-add',
  templateUrl: './vortaro-add.component.html',
  styleUrls: ['./vortaro-add.component.scss'],
})
export class VortaroAddComponent implements OnInit {
  public addForm!: FormGroup;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      addAngla: new FormControl(),
      addEsperanto: new FormControl(),
    });
  }

  public onSubmit(): void {
    const formValue = this.addForm.value;
    const value: Vortaro = {
      angla: formValue.addAngla,
      esperanto: formValue.addEsperanto,
    };

    this.translationService.addEntry(value);
  }
}
