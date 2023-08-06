import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '../shared/services/translation.service';
import { Vortaro } from '../shared/models/vortaro.model';

@Component({
  selector: 'vortaro-add',
  templateUrl: './vortaro-add.component.html',
  styleUrls: ['./vortaro-add.component.scss'],
})
export class VortaroAddComponent implements OnInit {
  public addForm!: FormGroup;

  constructor(private translationService: TranslationService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      addAngla: ['', Validators.required],
      addEsperanto: ['', Validators.required]
    })
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
