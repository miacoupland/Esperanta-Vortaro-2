import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'vortaro-get',
  templateUrl: './vortaro-get.component.html',
  styleUrls: ['./vortaro-get.component.scss'],
})
export class VortaroGetComponent implements OnInit {
  public tradukoForm!: FormGroup;
  public angla: string = '';
  public esperanto: string = '';

  constructor(private translationService: TranslationService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.tradukoForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    const formValue = this.tradukoForm.value;
    this.translationService.getEntry(formValue.search).subscribe((v) => {
      this.angla = v.angla;
      this.esperanto = v.esperanto;
    });
  }
}
