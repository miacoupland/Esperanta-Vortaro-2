import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslationService } from '../shared/services/translation.service';

@Component({
  selector: 'vortaro-get',
  templateUrl: './vortaro-get.component.html',
  styleUrls: ['./vortaro-get.component.scss'],
})
export class VortaroGetComponent implements OnInit {
  public tradukoForm!: FormGroup;
  public traduko: string = '';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.tradukoForm = new FormGroup({
      search: new FormControl(),
    });
  }

  public onSubmit(): void {
    const formValue = this.tradukoForm.value;
    this.translationService.getEntry(formValue.search).subscribe((v) => {
      this.traduko = `Angla: ${v.angla} Esperanto: ${v.esperanto}`;
    });
  }
}
