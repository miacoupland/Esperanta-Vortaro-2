import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'vortaro',
  templateUrl: './vortaro.component.html',
  styleUrls: ['./vortaro.component.scss']
})
export class VortaroComponent implements OnInit {
  public anglaForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.anglaForm = new FormGroup({
      name: new FormControl()
    });
  }

  public onSubmit(): void {

  }

}
