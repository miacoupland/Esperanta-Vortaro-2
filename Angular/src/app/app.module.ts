import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VortaroGetComponent } from './vortaro-get/vortaro-get.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VortaroRepository } from './shared/vortaro.repository';
import { VortaroAddComponent } from './vortaro-add/vortaro-add.component';
import { TranslationService } from './shared/services/translation.service';

@NgModule({
  declarations: [
    AppComponent,
    VortaroGetComponent,
    VortaroAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [TranslationService, VortaroRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
